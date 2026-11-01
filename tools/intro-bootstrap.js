(()=>{
 const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(location.hash||reduced.matches||performance.getEntriesByType('navigation')[0]?.type==='back_forward')return;
 root.classList.add('intro-pending');
 let timer=0;const locked=[];
 const gate=window.VETTIVER_INTRO={startedAt:performance.now(),finished:false,finish:()=>{
  if(gate.finished)return;gate.finished=true;clearTimeout(timer);root.classList.remove('intro-pending');
  locked.forEach(el=>el.inert=false);document.removeEventListener('keydown',key);
  if(scrollY<80&&!reduced.matches)root.classList.add('intro-reveal');
  window.dispatchEvent(new Event('vettiver:intro-ready'));
  setTimeout(()=>{document.querySelector('.brand-intro')?.remove();root.classList.remove('intro-reveal')},1150);
 }};
 const key=e=>{if(e.key==='Escape')gate.finish()};document.addEventListener('keydown',key);
 const begin=()=>{
  if(gate.finished)return;
  const intro=document.querySelector('.brand-intro');if(!intro){requestAnimationFrame(begin);return}
  gate.startedAt=performance.now();intro.addEventListener('click',e=>{if(e.target.closest('.amr-skip'))gate.finish()});
  for(const el of document.body.children)if(el instanceof HTMLElement&&el!==intro&&!el.inert&&!['SCRIPT','STYLE','LINK'].includes(el.tagName)){el.inert=true;locked.push(el)}
  const failOpen=()=>{intro.style.transition='none';gate.finish()};
  window.addEventListener('error',event=>{const target=event.target;if(target instanceof HTMLScriptElement && /\/assets\/react\/intro\.js(?:[?#]|$)/.test(target.src))failOpen()},{capture:true});
  const phase=()=>{if(gate.finished)return;const elapsed=performance.now()-gate.startedAt,poster=intro.querySelector('.amr-root');if(elapsed>=1200&&!intro.hasAttribute('data-intro-hydrated')){failOpen();return}if(elapsed>=5150){gate.finish();return}if(!intro.hasAttribute('data-intro-hydrated')){if(elapsed>=3900)poster?.setAttribute('data-phase','lift');else if(elapsed>=2200)poster?.setAttribute('data-phase','bloom');}timer=setTimeout(phase,50)};
  phase();
 };
 requestAnimationFrame(begin);setTimeout(gate.finish,5900);
 reduced.addEventListener('change',e=>{if(e.matches)gate.finish()});
 window.addEventListener('pageshow',e=>{if(e.persisted)gate.finish()});
})();
