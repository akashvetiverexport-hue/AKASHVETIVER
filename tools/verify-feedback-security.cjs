// Component-level checks only: no real server requests or authentication.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
const source = fs.readFileSync(path.join(__dirname, '../components/ui/feedback-form.tsx'), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS } }).outputText

function setup({ endpoint = '/api/feedback', overrides = {}, fetchImpl, timeout = false } = {}) {
  const values = ['Tamil Customer', 'Beautiful craftsmanship.', 5, false, '', false, true, false, '', ...[]]
  Object.assign(values, overrides)
  let cursor = 0, calls = 0, saved
  const exports = {}
  const react = { useEffect() {}, useRef: value => ({ current: value }), useState: () => {
    const index = cursor++
    return [values[index], value => { values[index] = value }]
  } }
  vm.runInNewContext(compiled, {
    exports, URL, AbortController,
    require: name => name === 'react' ? react : name === 'lucide-react' ? { Star: 'star', X: 'close', ArrowUpRight: 'arrow' } : require(name),
    window: { location: { href: 'https://example.com/', origin: 'https://example.com' }, setTimeout: fn => timeout ? setTimeout(fn, 0) : setTimeout(fn, 15000), clearTimeout },
    localStorage: { setItem: (key, value) => { saved = JSON.parse(value) } },
    fetch: async (...args) => { calls++; return fetchImpl ? fetchImpl(...args) : { ok: true, json: async () => ({ id: 'feedback-1', status: 'pending' }) } },
  })
  const tree = exports.FeedbackForm({ endpoint })
  function find(node, predicate) {
    if (!node || typeof node !== 'object') return
    if (predicate(node)) return node
    for (const child of [node.props?.children].flat(Infinity)) {
      const found = find(child, predicate)
      if (found) return found
    }
  }
  return { values, calls: () => calls, saved: () => saved, submit: () => find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} }), find: predicate => find(tree, predicate) }
}

async function run() {
  for (const overrides of [{ 0: ' ' }, { 0: 'x'.repeat(81) }, { 1: 'x'.repeat(1201) }, { 2: 6 }, { 2: 1.5 }, { 6: false }, { 8: 'spam' }]) {
    const form = setup({ overrides }); await form.submit(); assert.equal(form.calls(), 0); assert.equal(form.values[5], true)
  }
  for (const endpoint of ['https://other.example/api', '//other.example/api', 'javascript:alert(1)', 'https://user:pass@example.com/api']) {
    const form = setup({ endpoint }); await form.submit(); assert.equal(form.calls(), 0)
  }
  const draft = setup({ endpoint: '', overrides: { 6: false } }); await draft.submit()
  assert.equal(draft.calls(), 0); assert.equal(draft.saved().rating, 5); assert.match(draft.values[4], /not been sent/)
  const malformed = setup({ fetchImpl: async () => ({ ok: true, json: async () => ({ id: 123, status: 'pending' }) }) })
  await malformed.submit(); assert.equal(malformed.values[7], false); assert.equal(malformed.values[5], true)
  let release, payload
  const pending = setup({ fetchImpl: (url, options) => { payload = JSON.parse(options.body); assert.equal(options.redirect, 'error'); return new Promise(resolve => { release = resolve }) } })
  const first = pending.submit(); await pending.submit(); assert.equal(pending.calls(), 1)
  release({ ok: true, json: async () => ({ id: 'accepted', status: 'pending' }) }); await first
  assert.equal(payload.website, ''); assert.equal(pending.values[7], true)
  const limited = setup({ fetchImpl: async () => ({ ok: false, status: 429 }) }); await limited.submit(); assert.match(limited.values[4], /Too many/)
  const slow = setup({ timeout: true, fetchImpl: (_, { signal }) => new Promise((_, reject) => signal.addEventListener('abort', () => reject(new Error('aborted')))) })
  await slow.submit(); assert.match(slow.values[4], /timed out/); assert.equal(slow.values[3], false); assert.equal(slow.values[1], 'Beautiful craftsmanship.')
  assert.equal(pending.find(n => n.props?.id === 'feedback-website').props.tabIndex, -1)
  console.log('Feedback checks passed: validation, origin restrictions, draft honesty, duplicate guard, pending acknowledgement, honeypot payload, rate limit and timeout recovery.')
}
run().catch(error => { console.error(error); process.exitCode = 1 })
