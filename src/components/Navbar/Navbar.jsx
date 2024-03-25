import React, { useContext, useState } from 'react'
import './Navbar.css';
import './NavbarResponsive.css'
import './Colors.css'
import { FaPaintBrush,FaEraser, FaFileDownload , FaTrashAlt , FaRegHandPointLeft, FaRegHandPointRight, FaShareAlt} from "react-icons/fa";
import { CanvasContext } from '../../context/canvasContext';
import { resetDiv } from '../../services/Canvas/resetDiv';
import { downloadCanvas } from '../../services/Canvas/downloadCanvas';
import Colors from './Colors';
import { useRecords } from '../../hooks/useRecords';
import { shareDraw } from '../../services/shareDraw';
function Navbar() {

const {setPencilColor,setPencilThickness}=useContext(CanvasContext)
const [actualColor,setActualColor]=useState('black')
const {getFormerDraw,getAfterDraw}=useRecords()


  return (
    <nav>
      <div className="brush_thickness_container">
     {/* Pincel */}
     <button className='button-27'  onClick={()=>{setPencilColor('black'); setActualColor('black')}}>
     <FaPaintBrush size={35}/>
     </button>
     {/* Barra de grosor */}
    <div className="range">  
     <input type="range" min={1} defaultValue={10} max={50} onChange={(event)=>{setPencilThickness(event.target.value)}}/>
     </div>
     </div>


<div className="tool_container">
     {/* Borrador */}
     <button className='button-27' onClick={()=>{setPencilColor('white'); setActualColor('white')}}>
     <FaEraser size={35}/>
     </button>
     {/* Borrar dibujo */}
     <button className='button-27' onClick={()=>{resetDiv('canvas')}}>
     <FaTrashAlt size={35} />
     </button>
     {/* Descargar dibujo */}
     <button className='button-27' onClick={()=>{downloadCanvas('canvas')}}>
     <FaFileDownload size={35}/>
     </button>
      {/* Boton Compartir */}
      <button className='button-27' onClick={shareDraw}> 
     <FaShareAlt size={35} />
     </button>
      {/* Botones de regresar y adelantar */}
      <div className="after_then">
      <button className='button-27' onClick={()=>{getFormerDraw()}} >
     <FaRegHandPointLeft size={35} />
     </button>
      <button className='button-27' onClick={()=>{getAfterDraw()}}>
     <FaRegHandPointRight size={35}  />
     </button>
     </div>
     </div>
{/* //ESTO DE LOS COLORES METERLO EN UN SOLO COMPONENTE */}     
      <Colors actualColor={actualColor} setActualColor={setActualColor}/>
    </nav>
  )
}

export default Navbar