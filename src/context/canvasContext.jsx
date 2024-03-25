import React, { createContext, useRef } from "react";

//1 crear el contexto
export const CanvasContext=createContext();
//2 crear el provideer del contexto
export function CanvasProvider({children}){
    const canvasStatus=useRef({
        pencilColor:'black',
        pencilThickness: 10
    })
    function setPencilColor(color){
        canvasStatus.current.pencilColor=color
    }
    function setPencilThickness(thickness){
        canvasStatus.current.pencilThickness=thickness
    }
return(
    <CanvasContext.Provider value={{canvasStatus,setPencilColor,setPencilThickness}}>{children}</CanvasContext.Provider>
)
}