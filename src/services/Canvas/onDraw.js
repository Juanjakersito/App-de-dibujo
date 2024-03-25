export function onDraw(context,point,prevPoint,color,thickness){
    //Width x
    drawLine(prevPoint,point,context,color,thickness)

}

function drawLine(startPosition,endPosition,context,color,width){
    //dibujando linea 
    startPosition=startPosition ?? endPosition

    context.beginPath();
    context.lineWidth=width*2;
    context.strokeStyle=color;
    context.moveTo(startPosition.x,startPosition.y)
    context.lineTo(endPosition.x,endPosition.y)
    context.stroke()

    //dibujando circulo
    
    drawCircle(startPosition.x,startPosition.y,context,color,width)
}

export function drawCircle(startPosX,startPosY,context,color, width){
    context.fillStyle=color
    context.beginPath()
    context.arc(startPosX,startPosY,width,0,Math.PI*2)
    context.fill()
}



export function drawInitialRect(){
console.log('dibuje un rect inicial')
let canvas=document.getElementById('canvas')
let context=canvas.getContext('2d')
context.fillStyle='white'
context.fillRect(0,0,600,600)
}