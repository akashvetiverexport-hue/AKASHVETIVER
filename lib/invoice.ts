export type InvoiceLine={name:string;quantity:number;price:number}
export type Party={name:string;address:string;phone:string;email:string;registration?:string}
export type Invoice={id:string;number:string;issued_on:string;order_id:string|null;seller:Party;customer:Party;currency:string;items:InvoiceLine[];shipping:number;advance:number;notes:string;status:'issued'|'void';subtotal?:number;total?:number;balance?:number;created_at?:string}
export const money=(n:number,currency='INR')=>new Intl.NumberFormat('en-IN',{style:'currency',currency}).format(n)
export const round=(n:number)=>Math.round((n+Number.EPSILON)*100)/100
export function totals(invoice:Pick<Invoice,'items'|'shipping'|'advance'>){const subtotal=round(invoice.items.reduce((n,i)=>n+round(i.quantity*i.price),0));const total=round(subtotal+Number(invoice.shipping));return{subtotal,total,balance:round(total-Number(invoice.advance))}}
export function validateInvoice(i:Invoice){
 if(!i.number.trim()||!/^[-A-Za-z0-9/]{1,48}$/.test(i.number))throw new Error('Use letters, numbers, / or - for the invoice number (up to 48 characters).')
 if(!/^\d{4}-\d{2}-\d{2}$/.test(i.issued_on)||!Number.isFinite(Date.parse(i.issued_on)))throw new Error('Choose an invoice date.')
 if(!i.seller.name.trim()||i.seller.name.length>200)throw new Error('Enter your business name (up to 200 characters).')
 if(!i.customer.name.trim())throw new Error('Enter the customer name.')
 if(!['INR','USD','EUR','GBP','AED'].includes(i.currency))throw new Error('Choose a supported currency.')
 if(!i.items.length||i.items.length>100)throw new Error('Add between 1 and 100 invoice items.')
 for(const item of i.items)if(!item.name.trim()||!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>100000||!Number.isFinite(item.price)||item.price<0||item.price>10000000||round(item.price)!==item.price||item.name.length>240)throw new Error('Every item needs a name, a whole-number quantity and a valid price. Free gifts can be priced at zero.')
 if(!Number.isFinite(i.shipping)||i.shipping<0||i.shipping>10000000||!Number.isFinite(i.advance)||i.advance<0||i.advance>totals(i).total)throw new Error('Check shipping and advance amounts. Advance cannot exceed the invoice total.')
}
export async function createInvoiceFile(invoice:Invoice){
 const [{jsPDF},{default:autoTable}]=await Promise.all([import('jspdf'),import('jspdf-autotable')]);const pdf=new jsPDF();
 const bytes=await fetch('assets/fonts/jakarta-regular.ttf').then(r=>{if(!r.ok)throw new Error('Could not load the invoice font. Please retry.');return r.arrayBuffer()});let binary='';for(const b of new Uint8Array(bytes))binary+=String.fromCharCode(b);pdf.addFileToVFS('Jakarta.ttf',btoa(binary));pdf.addFont('Jakarta.ttf','Jakarta','normal');pdf.setFont('Jakarta');
 const green:[number,number,number]=[2,54,22],muted:[number,number,number]=[78,94,77];pdf.setTextColor(...green);pdf.setFontSize(22);pdf.text(invoice.status==='void'?'VOID INVOICE':'INVOICE',194,22,{align:'right'});
 let y=22;
 const block=(text:string,width:number,size=9,step=5)=>{pdf.setFontSize(size);const lines=pdf.splitTextToSize(text,width);for(const line of lines){if(y>265){pdf.addPage();y=22}pdf.text(line,16,y);y+=step}}
 block(invoice.seller.name,105,16,7);y=Math.max(y+3,32);pdf.setDrawColor(...green);pdf.line(16,y,194,y);y+=8;pdf.setTextColor(...muted);
 block([invoice.seller.address,invoice.seller.phone,invoice.seller.email,invoice.seller.registration?`Registration: ${invoice.seller.registration}`:''].filter(Boolean).join('\n'),175);y+=8;
 if(y>245){pdf.addPage();y=22}pdf.setFontSize(9);pdf.setTextColor(...green);pdf.text(`Invoice: ${invoice.number}`,16,y);pdf.text(`Issued: ${invoice.issued_on}`,194,y,{align:'right'});y+=10;pdf.text('BILLED TO',16,y);y+=6;block([invoice.customer.name,invoice.customer.address,invoice.customer.phone,invoice.customer.email].filter(Boolean).join('\n'),175);y+=8;if(y>250){pdf.addPage();y=22}
 const fmt=(n:number)=>`${invoice.currency} ${n.toFixed(2)}`;
 autoTable(pdf,{startY:y,margin:{left:16,right:16,bottom:24},head:[['Description','Qty','Unit price','Amount']],body:invoice.items.map(i=>[i.name,String(i.quantity),fmt(i.price),fmt(round(i.quantity*i.price))]),styles:{font:'Jakarta',fontStyle:'normal',fontSize:9,cellPadding:4,textColor:green},headStyles:{fillColor:[235,242,230],textColor:green,fontStyle:'normal'},columnStyles:{0:{cellWidth:86},1:{halign:'right'},2:{halign:'right'},3:{halign:'right'}},theme:'grid'});
 y=(pdf as typeof pdf&{lastAutoTable:{finalY:number}}).lastAutoTable.finalY+10;if(y>225){pdf.addPage();y=25}const t=totals(invoice);for(const [label,value] of [['Subtotal',t.subtotal],['Shipping',invoice.shipping],['Total',t.total],['Advance paid',invoice.advance],['Balance due',t.balance]] as const){pdf.setFontSize(label==='Balance due'?12:9);pdf.text(label,115,y);pdf.text(fmt(value),194,y,{align:'right'});y+=8}
 if(invoice.notes){const lines=pdf.splitTextToSize(invoice.notes,175);y+=8;for(const line of lines){if(y>270){pdf.addPage();y=25}pdf.setFontSize(9);pdf.text(line,16,y);y+=5}}
 for(let p=1;p<=pdf.getNumberOfPages();p++){pdf.setPage(p);pdf.setFontSize(8);pdf.setTextColor(...muted);pdf.text(`${invoice.number}  |  AKASH VETIVER`,16,285);pdf.text(`${p} / ${pdf.getNumberOfPages()}`,194,285,{align:'right'})}
 return new File([pdf.output('blob')], `${invoice.number.replace(/[^a-z0-9-]/gi,'-')}.pdf`, {type:'application/pdf'})
}

export function nextInvoiceNumber(invoices:Pick<Invoice,'number'>[]){
 let highest=0n
 for(const invoice of invoices){if(/^\d+$/.test(invoice.number)){const number=BigInt(invoice.number);if(number>highest)highest=number}}
 return String(highest+1n)
}
export function downloadInvoiceFile(file:File){
 const url=URL.createObjectURL(file),link=document.createElement('a');link.href=url;link.download=file.name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000)
}
export async function downloadInvoice(invoice:Invoice){downloadInvoiceFile(await createInvoiceFile(invoice))}
