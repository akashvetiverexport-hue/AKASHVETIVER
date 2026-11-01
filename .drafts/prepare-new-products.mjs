import sharp from 'sharp';import {mkdir,copyFile} from 'node:fs/promises';
const generated='C:/Users/avina/.codex/generated_images/01a16f76-5d8e-7701-9779-8f8f731982be/';
for(const [name,file] of [['vetiver-ganesha','exec-565236b6-683b-4962-a51f-a4e563b587d4.png'],['scrubbers-pack-3','exec-065529ca-bcda-4e41-b457-d405ef8ace2e.png']]){
 await mkdir('images/products/studio-v1',{recursive:true});await copyFile(generated+file,'images/products/studio-v1/'+name+'.png');
 for(const [suffix,size,quality] of [['',1200,80],['-thumb',320,76]]){const info=await sharp(generated+file).resize(size,size,{fit:'inside',withoutEnlargement:true}).webp({quality,effort:6}).toFile('images/optimized/products/studio-v1/'+name+suffix+'.webp');console.log(name+suffix,info.size,info.width,info.height);}
}
