import { controlKngihtAnimation } from "../controlAnimation";
import { swap } from "../controlMoves";
import { checkBackground } from "../controlStyle";

function handleKnight(des: number, prev: number, board: string[]) {

    let animation: { animationValue: { from: string; to: string }, animationName: string } = { animationValue: { from: '', to: '' }, animationName: '' }
    let flag: boolean = false
    const newBoard = [...board];


    if (!board[des].trim()) {

        const isBgSame = checkBackground(des, prev)


        if (!isBgSame) {

            console.log('knight');
            const knightArray: number[] = [10, 6, 15, 17]

            const diff: number = Math.abs(prev - des)
            if (knightArray.includes(diff)) {

                console.log(diff);

                swap(des, prev, newBoard)
                flag = true
                animation = controlKngihtAnimation(des, prev, diff)


            }



        }
    }







    return { newBoard, flag, animationValue: animation?.animationValue, animation: animation?.animationName }
}

export default handleKnight