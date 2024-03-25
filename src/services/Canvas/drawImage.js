export async function drawImage(urlImg){
   
    
  let canvas=document.getElementById('canvas')
  let ctx=canvas.getContext('2d')

  let imagen=document.createElement('img')
  imagen.src=urlImg

  imagen.addEventListener('load',()=>{
      ctx.drawImage(imagen,0,0,600,600)
  })


    console.log('dibuje una imagen')
  }