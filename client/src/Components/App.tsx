import { useState } from "react";
import SingleBox from "./SingleBox";
import { useSelector } from "react-redux";

export interface rootState{
  board:{board:string[]}
}

function App() {

  const boardArray:any = useSelector<rootState>((store)=>store?.board)
  console.log(boardArray,'arrayyyyy');
  
  // const [boardArray, setBoardArray] = useState<string[]>(board);
  const [selectedIndex,setSelectedIndex] =useState<number | null>(null)



  return (
    <>
      <div
        className="w-fit grid grid-cols-8 gap-0 h-fit rounded-md mx-auto mt-4 border border-double border-black bg-cover cursor-pointer"
        style={{ backgroundImage: 'url("/pexels-pixabay-326311.jpg")' }}
      >
        {boardArray?.board?.map((box: string, index: number) => {
          return (
            <>
              <SingleBox index={index} box={box} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>

            </>
          );
        })}
        {/* <div className='w-[4.5rem] h-[4.5rem] border border-[#ffffffad] bg-[#ffffff1c]'></div>
      <div className='w-[4.5rem] h-[4.5rem] border border-[#ffffffad] bg-[#000000b0]'></div> */}
      
      <audio id="myAudio">
  <source src="chess-move-sound.mp3" type="audio/mpeg"></source>
</audio>         
      </div>

    </>
  );
}

export default App;
