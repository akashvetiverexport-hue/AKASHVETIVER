import concurrent.futures, subprocess, pathlib, json, datetime
root=pathlib.Path('D:/Vettiver/.drafts/seo'); scripts=pathlib.Path('C:/Users/avina/.codex/skills/seo/scripts'); url='https://akashvetiver.akashvetiverexport.workers.dev'
jobs={
'fetch-home':['fetch_page.py',url+'/', '--output', str(root/'home.html')],
'fetch-products':['fetch_page.py',url+'/products.html','--output',str(root/'products.html')],
'fetch-admin':['fetch_page.py',url+'/admin.html','--output',str(root/'admin.html')],
'robots':['robots_checker.py',url,'--json'],
'llms':['llms_txt_checker.py',url,'--json'],
'pagespeed-mobile':['pagespeed.py',url,'--strategy','mobile','--json'],
'headers':['security_headers.py',url,'--json'],
'links':['broken_links.py',url,'--internal-only','--workers','5','--timeout','10','--json'],
'redirects':['redirect_checker.py',url,'--json'],
'social-home':['social_meta.py',url,'--json'],
'social-products':['social_meta.py',url+'/products.html','--json'],
'internal-links':['internal_links.py',url,'--depth','1','--max-pages','10','--json']}
def run(item):
 name,args=item
 try:
  result=subprocess.run(['python',str(scripts/args[0]),*args[1:]],capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=100)
  (root/(name+'.txt')).write_text(result.stdout+'\nSTDERR:\n'+result.stderr,encoding='utf-8')
  return {'name':name,'exit_code':result.returncode}
 except subprocess.TimeoutExpired:
  (root/(name+'.txt')).write_text('Environment limitation: command exceeded bounded 100 second timeout; not retried.',encoding='utf-8')
  return {'name':name,'timeout':True}
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
 for result in pool.map(run,jobs.items()): print(json.dumps(result),flush=True)
