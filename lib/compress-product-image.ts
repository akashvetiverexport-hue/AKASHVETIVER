export type CompressedProductImage = { image: Blob; thumbnail: Blob; width: number; height: number; originalBytes: number }
export async function compressProductImage(file: File): Promise<CompressedProductImage> {
 if (!['image/jpeg','image/png','image/webp'].includes(file.type)) throw new Error('Choose a JPEG, PNG or WebP photo.')
 if (!file.size || file.size > 15*1024*1024) throw new Error('Choose a photo smaller than 15 MB.')
 const bitmap = await createImageBitmap(file, { imageOrientation:'from-image' }).catch(()=>{throw new Error('This photo could not be opened. Try another image.')})
 try {
  if(bitmap.width*bitmap.height>40000000)throw new Error('Choose a photo below 40 megapixels.')
  const encode = async(maximum:number,budget:number,quality:number)=>{
   let longest=Math.min(maximum,Math.max(bitmap.width,bitmap.height))
   for(let pass=0;pass<5;pass++){
    const ratio=longest/Math.max(bitmap.width,bitmap.height),canvas=document.createElement('canvas')
    canvas.width=Math.max(1,Math.round(bitmap.width*ratio));canvas.height=Math.max(1,Math.round(bitmap.height*ratio))
    const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Your browser cannot prepare images.')
    ctx.drawImage(bitmap,0,0,canvas.width,canvas.height)
    for(const q of [quality,quality-.08,quality-.16]){
     const blob=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(new Error('Could not compress this photo.')),'image/webp',q))
     if(blob.type!=='image/webp')throw new Error('Use a current browser that supports WebP photos.')
     if(blob.size<=budget)return {blob,width:canvas.width,height:canvas.height}
    }
    longest=Math.round(longest*.8)
   }
   throw new Error('This photo could not meet the upload size limit. Choose a smaller image.')
  }
  const full=await encode(1200,450*1024,.84),thumb=await encode(320,64*1024,.78)
  return {image:full.blob,thumbnail:thumb.blob,width:full.width,height:full.height,originalBytes:file.size}
 }finally{bitmap.close()}
}
