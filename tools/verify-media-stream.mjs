import assert from 'node:assert/strict'
import worker from '../server/worker.mjs'
const original=globalThis.fetch, env={},ctx={waitUntil(){}}
const request=()=>new Request('https://akashvetiver.akashvetiverexport.workers.dev/api/media/test.webp')
try {
 globalThis.fetch=async()=>new Response(new Uint8Array(20),{headers:{'Content-Type':'image/webp'}})
 let r=await worker.fetch(request(),env,ctx);assert.equal(r.status,200);assert.equal((await r.arrayBuffer()).byteLength,20)
 let sent=0,cancelled=false
 globalThis.fetch=async()=>new Response(new ReadableStream({pull(controller){sent++;controller.enqueue(new Uint8Array(200000))},cancel(){cancelled=true}}),{headers:{'Content-Type':'image/webp','Content-Length':'1'}})
 r=await worker.fetch(request(),env,ctx);assert.equal(r.status,413);assert.ok(sent<=4);assert.equal(cancelled,true)
 globalThis.fetch=async()=>new Response(null,{headers:{'Content-Type':'image/webp'}});assert.equal((await worker.fetch(request(),env,ctx)).status,502)
 console.log('PASS media streaming: bounded actual bytes, cancellation when oversized, and invalid response handling')
}finally{globalThis.fetch=original}
