import handleBishop, { HandleBishopReturnType } from "./handleBishop";
import handleRook from "./handleRook";

function handleQueen(des: number, prev: number, board: string[]){

    let flag:boolean = false
    let animation: { animationValue: { from: string; to: string }, animationName: string } = { animationValue: { from: '', to: '' }, animationName: '' }
    const newBoard:string[] = [...board];

    let response:HandleBishopReturnType = handleBishop(des,prev,board)

    console.log(response);
    if(!response.flag){
        response= handleRook(des,prev,board)
    }
    

if(response.flag){
    return response
}
    return { newBoard, flag, animationValue: animation?.animationValue, animation: animation?.animationName }
}

export default handleQueen;