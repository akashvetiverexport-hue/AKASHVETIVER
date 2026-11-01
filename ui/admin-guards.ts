type State = { dirty:boolean; busy:boolean }
const guards = new Map<string,()=>State>()
export function registerAdminGuard(name:string,read:()=>State){guards.set(name,read);return()=>{guards.delete(name)}}
export function canLeaveAdmin(){
 const states=[...guards.values()].map(read=>read())
 if(states.some(s=>s.busy)){alert('Please wait for the current save to finish.');return false}
 return !states.some(s=>s.dirty)||confirm('You have unsaved changes. Discard them and sign out?')
}
window.addEventListener('beforeunload',event=>{if([...guards.values()].some(read=>{const s=read();return s.dirty||s.busy})){event.preventDefault();event.returnValue=''}})
