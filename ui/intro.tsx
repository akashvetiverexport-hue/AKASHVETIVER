import {hydrateRoot} from 'react-dom/client'
import AmourSunrisePreloader from '@/components/ui/amour-sunrise-preloader'
declare global {interface Window {VETTIVER_INTRO?:{startedAt:number;finish:()=>void;finished:boolean}}}
const host=document.getElementById('brand-intro-react'),gate=window.VETTIVER_INTRO
// If the module arrives late, the first-paint poster already completes itself.
// Never put a new loader over a page the visitor has begun using.
if(host&&gate&&!gate.finished&&document.documentElement.classList.contains('intro-pending')&&performance.now()-gate.startedAt<1200){
 host.setAttribute("data-intro-hydrated","true");
 let root: ReturnType<typeof hydrateRoot> | undefined;
 try { root=hydrateRoot(host,<AmourSunrisePreloader startedAt={gate.startedAt} onComplete={gate.finish} word="AKASH VETIVER" caption="Made with love." palette={{paper:"#f6fbf3",ink:"#023616",sun:"#52682e",core:"#153e29",glow:"#f6fbf3"}}/>,{onUncaughtError:gate.finish}); } catch { gate.finish(); }
 window.addEventListener('vettiver:intro-ready',()=>setTimeout(()=>root?.unmount(),750),{once:true})
}
