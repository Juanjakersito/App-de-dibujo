import { useContext, useEffect, useRef } from "react";
import { CanvasContext } from "../context/canvasContext";
import { drawCircle, drawInitialRect } from "../services/Canvas/onDraw";
import { useRecords } from "./useRecords";

export function useOnDraw(onDraw){
    const canvasRef=useRef(null);
    const isDrawingRef=useRef(false);
    const previousPoint=useRef(null)


    const {canvasStatus}=useContext(CanvasContext)
    const {recordCanvas}=useRecords()

    

    useEffect(()=>{
        drawInitialRect()
    },[])




    function setCanvasRef(ref){
        if (!ref) {return};

       
       
        canvasRef.current=ref
        initMouseDownListener();
        initMouseMoveEventListener();
        initMouseUpListener();

    }

    function initMouseMoveEventListener(){
        function mouseMoveListener(e){
            if(isDrawingRef.current){

            const point=computePointInCanvas(e.clientX,e.clientY)
            const context=canvasRef.current.getContext('2d')

            if(onDraw){ 
            onDraw(context,point,previousPoint.current,canvasStatus.current.pencilColor,canvasStatus.current.pencilThickness)}
            previousPoint.current=point
            console.log(point)

            }

        }
        //provaando solo alterar el canvas ref

        //window.addEventListener('mousemove',mouseMoveListener)
        canvasRef.current.addEventListener('mousemove',mouseMoveListener)

    }

    function computePointInCanvas(clientX,clientY){
        if(canvasRef.current){
            const boundingRect=canvasRef.current.getBoundingClientRect();
            return {x : clientX-boundingRect.left ,y : clientY-boundingRect.top}
        } else{ return null;}
    }

    function initMouseDownListener(){
        if(!canvasRef.current) return;
        function listener(e){
            //dibuja un punto cuando se le da click
            const point=computePointInCanvas(e.clientX,e.clientY)
            const context=canvasRef.current.getContext('2d')
            drawCircle(point.x,point.y,context,canvasStatus.current.pencilColor,canvasStatus.current.pencilThickness)

            isDrawingRef.current=true            
        }
        canvasRef.current.addEventListener('mousedown',listener)
    }

    function initMouseUpListener(){
        function listener(e){
            //dibuja un punto cuando se le deja de dar click
            const point=computePointInCanvas(e.clientX,e.clientY)
            const context=canvasRef.current.getContext('2d')
            drawCircle(point.x,point.y,context,canvasStatus.current.pencilColor,canvasStatus.current.pencilThickness)

            isDrawingRef.current=false
            previousPoint.current=null

            //hace un record de lo hecho
            recordCanvas();
        }

        //provaando solo alterar el canvas ref

        //window.addEventListener('mouseup',listener)
        canvasRef.current.addEventListener('mouseup',listener)

    }

    return {setCanvasRef}
}