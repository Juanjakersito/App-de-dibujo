import React from 'react'
import { colores } from '../../assets/listaColores'
import { useState , useContext } from 'react'
import { CanvasContext } from '../../context/canvasContext';

function Colors({actualColor,setActualColor}) {

    const {setPencilColor}=useContext(CanvasContext)

  return (
    <div className="colors">
    <div className="actual_color" style={{backgroundColor:actualColor}}></div>
  <div className="colors_container">
    {colores.map(color=>{
      return <button 
      className='color_button' 
      style={{backgroundColor:color}}
       onClick={()=>{
      setPencilColor(color)
      setActualColor(color)
    }}
     />
      })}
  </div>
     </div>
  )
}

export default Colors