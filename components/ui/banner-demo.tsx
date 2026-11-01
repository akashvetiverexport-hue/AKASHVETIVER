import { Banner } from './banner'
const screenshot='https://cdn.21st.dev/assets/mirror/86/867a175524a0966eb144327b962159fa1ac4e1822b0cd857759b754306f3b0d4.png'
export function RainbowBannerDemo(){return <div><Banner message="New features coming soon!" height="2rem" variant="rainbow"/><img src={screenshot} alt="Application screenshot" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover'}}/></div>}
export function BannerDemo(){return <div><Banner message="New features coming soon!" height="2rem"/><img src={screenshot} alt="Application screenshot" style={{width:'100%',aspectRatio:'16/9',objectFit:'cover'}}/></div>}
