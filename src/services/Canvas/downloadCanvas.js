export function downloadCanvas(id){
    let can=document.getElementById(id)

    let image=can.toDataURL("image/jpeg",1)

    let link=document.createElement('a')
    link.href=image
    link.download='dibujo'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
