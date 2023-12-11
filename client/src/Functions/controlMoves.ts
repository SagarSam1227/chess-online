import { Dispatch, AnyAction } from "redux";
import { replace } from "../redux/slices/boardSlice";
import handlePawn from "./Handling/handlePawn";
import handleBishop from "./Handling/handleBishop";
import controlStyle from "./controlStyle";
import handleKnight from "./Handling/handleKnight";
import handleRook from "./Handling/handleRook";
import handleQueen from "./Handling/HandleQueen";
import handleKing from "./Handling/handleKing";

interface moveInterface {
  newBoard: string[],
  flag: boolean,
  animationValue: { from: string; to: string }, animation: string
}


async function controlMoves(desIndex: number, prevIndex: number, board: string[], dispatch: Dispatch<AnyAction>) {
  let response: moveInterface = {
    newBoard: [],
    flag: false,
    animationValue: { from: '', to: '' }, animation: ''
  }





  if (board[prevIndex].includes('pawn')) {
    response = handlePawn(desIndex, prevIndex, board)
  }


  else if (board[prevIndex].includes('bishop')) {
    console.log('bishop mode on');

    response = handleBishop(desIndex, prevIndex, board)
  }

  else if (board[prevIndex].includes('knight')) {
    console.log('knight mode on');

    response = handleKnight(desIndex, prevIndex, board)
  }

  else if (board[prevIndex].includes('rook')) {
    console.log('rook mode on');

    response = handleRook(desIndex, prevIndex, board)
  }

  else if (board[prevIndex].includes('queen')) {
    console.log('queen mode on');

    response = handleQueen(desIndex, prevIndex, board)
  }
  else if (board[prevIndex].includes('king')) {
    console.log('king mode on');

    response = handleKing(desIndex, prevIndex, board)
  }





  if (response?.flag) {
    // setIsMoved(true)
    console.log('correct way....');

    const divElement: HTMLElement | null = document.getElementById(`${prevIndex}`)

    let audio:HTMLAudioElement = document.getElementById("myAudio") as HTMLAudioElement
    

    // divElement?.classList.add('moving')
    if (divElement) {
      const imgElement: HTMLElement | null = divElement.querySelector('img')
      if (imgElement) {

        if(audio)
       audio.currentTime = 0;
   await audio?.play();

        controlStyle(response?.animationValue?.from, response?.animationValue?.to, response?.animation)

        imgElement.style.animation = `${response?.animation} 1s`;
        imgElement.style.position = 'relative';

      

        // Add an event listener for the animationend event
        imgElement.addEventListener('animationend', onAnimationEnd);
      }

      function onAnimationEnd() {
        // Remove the event listener to prevent multiple dispatches
        if(audio){
          audio.pause();
          audio.currentTime = 0;
                                  
        }
        if (imgElement)
          imgElement.removeEventListener('animationend', onAnimationEnd);

       

        console.log(response, 'responsessssss');
        console.log(divElement);

        dispatch(replace(response.newBoard));
      }


    }
    return true
  }

  return false



}

export function swap(a: number, b: number, arr: string[]) {
  let temp: string = arr[a];
  arr[a] = arr[b]
  arr[b] = temp
}

export default controlMoves