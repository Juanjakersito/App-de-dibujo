import { drawImage } from "../services/Canvas/drawImage";

  let afterRecords =[]
  let formerRecords=[]

export function useRecords(){



    function recordCanvas(){
        let actualCanvas=document.getElementById('canvas')
        let imagenCanvas=actualCanvas.toDataURL('image/png')

        formerRecords.push(imagenCanvas)
        


          if(formerRecords.length>10){
            formerRecords.shift()
          }

         console.log(formerRecords)
    }



    function getFormerDraw(){
        console.log('se ejecuto getFormerDraw')
         console.log(formerRecords.length)
         if(formerRecords.length==0) return;


         let formerDrawUrl=formerRecords[formerRecords.length-2]

         let lastFormerUrl=formerRecords[formerRecords.length-1]

         if(formerRecords.length==1){
            formerDrawUrl=formerRecords[0]
         }

         drawImage(formerDrawUrl)

         afterRecords.push(lastFormerUrl)
         formerRecords.pop()

    
    }



    function getAfterDraw(){
        console.log('se ejecuto getAfterDraw')
        console.log(afterRecords.length)
        if(afterRecords.length==0) return;
       
        let afterDrawUrl=afterRecords[afterRecords.length-1]

        drawImage(afterDrawUrl)

        formerRecords.push(afterDrawUrl)
        afterRecords.pop() 
    }


    return {recordCanvas,getFormerDraw,getAfterDraw}
}