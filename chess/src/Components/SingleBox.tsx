import { useEffect, useState } from "react";
import controlMoves from "../Functions/controlMoves";
import { useSelector } from "react-redux";
import { rootState } from "./App";
import { useDispatch } from "react-redux";

interface singleBoxInterface{
    index:number,
    box:string,
    selectedIndex:number | null,
    setSelectedIndex:(arg0: number | null)=>void
}


function SingleBox({index,box,selectedIndex,setSelectedIndex}:singleBoxInterface){

    const dispatch = useDispatch()

    const boardArray:any = useSelector<rootState>((store)=>store?.board)

    const [currentColor,setCurrentColor] = useState<string>('')


    const controlClick= ()=>{
        if(!box.trim() && selectedIndex){
            controlMoves(index,selectedIndex,boardArray.board,dispatch).then((response:boolean)=>{
                if(response){
                    setSelectedIndex(null)
                }
            })
            
        }
    }


useEffect(()=>{

  if( index>=0 && index<=7 ||index>=16 && index<=23 || index>=32 && index<=39 || index>=48 && index<=55 ){
    if(index%2==0){
        setCurrentColor('')
    }else{
        setCurrentColor('#000000b0')
    }
  }else{
    if(index%2!=0){
        setCurrentColor('')
    }else{
        setCurrentColor('#000000b0')
    }
  }
    
},[currentColor])


// border border-[#ffffff1e]

    return (
        <>
        <div onClick={()=>{
            controlClick()
            setSelectedIndex(index)
        }} id={`${index}`} className={`${box.trim()?selectedIndex==index?'border border-[black] border-b-4 border-s-2 ':'':''} w-[4.5rem] h-[4.5rem] shadow-sm  bg-[${currentColor}]`}>
            <h1 className="text-white absolute font-mono text-xs">{index}</h1>
            {box.trim()?
            <img className={`w-full h-full object-center relative object-contain ${selectedIndex==index? 'bounce2':''}`}  src={box} alt=""/>:
            <>
            </>
            }
        </div>
        </>
    )
}

export default SingleBox;
   