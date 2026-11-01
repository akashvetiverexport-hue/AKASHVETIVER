import subprocess,pathlib,concurrent.futures,json,requests
r=pathlib.Path('D:/Vettiver/.drafts/seo'); s=pathlib.Path('C:/Users/avina/.codex/skills/seo/scripts'); u='https://akashvetiver.akashvetiverexport.workers.dev'
jobs=[('parse-home',['parse_html.py',str(r/'home.html'),'--url',u+'/','--json']),('parse-products',['parse_html.py',str(r/'products.html'),'--url',u+'/products.html','--json']),('parse-admin',['parse_html.py',str(r/'admin.html'),'--url',u+'/admin.html','--json']),('readability',['readability.py',str(r/'home.html'),'--json']),('sitemap',['sitemap_checker.py',u,'--max-urls','10','--timeout','15','--json'])]
def run(job):
 name,args=job
 try:
  p=subprocess.run(['python',str(s/args[0]),*args[1:]],capture_output=True,text=True,encoding='utf8',errors='replace',timeout=65)
  (r/(name+'.txt')).write_text(p.stdout+'\nSTDERR:\n'+p.stderr,encoding='utf8');return [name,p.returncode]
 except subprocess.TimeoutExpired:return [name,'timeout']
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as p:
 for x in p.map(run,jobs):print(x)
results=[]
for path in ['/robots.txt','/sitemap.xml','/llms.txt','/admin.html','/products.html','/index.html']:
 try:
  q=requests.get(u+path,timeout=15); results.append({'path':path,'status':q.status_code,'final_url':q.url,'content_type':q.headers.get('content-type'),'redirects':[{'status':x.status_code,'location':x.headers.get('location')} for x in q.history],'body_start':q.text[:180],'x_robots_tag':q.headers.get('x-robots-tag')})
 except requests.RequestException as e:results.append({'path':path,'error':str(e)})
(r/'routes.json').write_text(json.dumps(results,indent=2),encoding='utf8');print(json.dumps(results,indent=2))
