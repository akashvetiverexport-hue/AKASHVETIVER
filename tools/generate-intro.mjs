import fs from 'node:fs/promises'
import ts from 'typescript'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {pathToFileURL} from 'node:url'
import path from 'node:path'
const root=path.resolve(import.meta.dirname,'..')
const source=await fs.readFile(path.join(root,'components/ui/amour-sunrise-preloader.tsx'),'utf8')
const code=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,jsx:ts.JsxEmit.ReactJSX}}).outputText
const temp=path.join(root,'.drafts/intro-server.mjs');await fs.mkdir(path.dirname(temp),{recursive:true});await fs.writeFile(temp,code)
const {default:Preloader}=await import(pathToFileURL(temp).href+'?'+Date.now())
const markup=renderToString(React.createElement(Preloader,{word:"AKASH VETIVER",caption:"Made with love.",palette:{paper:"#f6fbf3",ink:"#023616",sun:"#52682e",core:"#153e29",glow:"#f6fbf3"}}))
let html=await fs.readFile(path.join(root,'index.html'),'utf8')
const bootstrap=(await fs.readFile(path.join(root,'tools/intro-bootstrap.js'),'utf8')).trim()
html=html.replace(/<script data-intro-bootstrap>[\s\S]*?<\/script>/,`<script data-intro-bootstrap>${bootstrap}</script>`)
const block=`<!-- INTRO:START --><div class="brand-intro" id="brand-intro-react" aria-label="Welcome to Akash Vetiver">${markup}</div><!-- INTRO:END -->`
if(html.includes('<!-- INTRO:START -->'))html=html.replace(/<!-- INTRO:START -->[\s\S]*?<!-- INTRO:END -->/,block)
else html=html.replace(/<div class="brand-intro"[\s\S]*?<\/button><\/div>/,block)
if(!html.includes('src="assets/react/intro.js"'))html=html.replace('<script type="module" src="assets/react/sections.js"></script>','<script type="module" src="assets/react/intro.js"></script>\n  <script type="module" src="assets/react/sections.js"></script>')
await fs.writeFile(path.join(root,'index.html'),html)
console.log('Generated first-paint sunrise poster and independent intro bootstrap.')
