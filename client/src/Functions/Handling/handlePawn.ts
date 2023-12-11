import { swap } from "../controlMoves";
import { controlPawnAnimation } from "../controlAnimation";

function handlePawn(desIndex: number, prevIndex: number, board: string[]) {
    let flag:boolean = false
    let animation:string = 'center-to-top'
    let animationValue:{from:string;to:string} = {from:'',to:''}
    const des:number = desIndex
    const prev:number = prevIndex
    const newBoard:string[] = [...board];

    console.log(typeof (desIndex));

    if (+prev >= 48 && +prev <= 55) {
        console.log(board, 'boarddd......');

        if (+prev - 8 == +des || (+prev - 16 == +des && !board[prev-8].trim()) && !board[+des].trim()) {
            swap(des,prev,newBoard)
            flag = true
        }
    }else {
        if(+prev - 8 == +des  && !board[+des].trim()){
            swap(des,prev,newBoard)
            flag=true

        }
    }
if(flag)
    animationValue = controlPawnAnimation(+desIndex,+prevIndex)

    return {newBoard,flag,animationValue,animation}

}


export default handlePawn