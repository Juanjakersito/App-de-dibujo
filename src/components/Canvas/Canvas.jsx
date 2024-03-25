import React from 'react'
import { useOnDraw } from '../../hooks/useOnDraw'
import './Canvas.css'
import { onDraw } from '../../services/Canvas/onDraw';





function Canvas({width,height}) {
    const {setCanvasRef}=useOnDraw(onDraw);
    
  return (
    <> 
    <canvas 
    id='canvas' 
    className='canvas'
     width={width} height={height} 
     ref={setCanvasRef}
     >
    </canvas>
    </>
  )
}


export default Canvas