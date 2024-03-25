import { drawInitialRect } from "./onDraw"

export function resetDiv(id){
    let div=document.getElementById(id)
    div.width=div.width
    drawInitialRect();
  }

