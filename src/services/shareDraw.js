export async function shareDraw(){
    
    let canvas=document.getElementById('canvas')
    let dataUrl=canvas.toDataURL()
    let blob=await (await fetch(dataUrl)).blob()
    let filesArray=[
        new File(
            [blob],
        'MiDibujo.png',
        {
            type:blob.type,
            lastModified: new Date().getTime
        })
    ]
   
    let object={
        title:'MiDibujo',
        text:'Mira el dibujo que hice',
        files:filesArray,
    }
    if(navigator.share){
        navigator.share(object).then(()=>{
            console.log('gracias por compartir')
        })
        .catch((err)=>console.log(err))
    }else{
        alert('la funcion compartir no es soportada por este navegador')
    }
}