import { controlBishopAnimation } from "../controlAnimation";
import { swap } from "../controlMoves";
import { checkBackground } from "../controlStyle";

function handleBishop(desIndex: number, prevIndex: number, board: string[]) {

    let animation: { animationValue: { from: string; to: string }, animationName: string } = { animationValue: { from: '', to: '' }, animationName: '' }
    let flag: boolean = false
    const newBoard = [...board];
    let difference = 0
    if ((prevIndex - desIndex) % 9 == 0) {
        difference = 9
    } else {
        difference = 7
    }
    console.log(difference, 'differenceee');

    console.log('before entering', board[desIndex]);

    if (!board[desIndex].trim()) {


        const isBgSame: boolean = checkBackground(desIndex, prevIndex)

        if (isBgSame) {

            let check = 1
            
            for (let i = prevIndex > desIndex ? prevIndex - difference : prevIndex + difference; prevIndex > desIndex ? i >= desIndex : i <= desIndex; prevIndex > desIndex ? i-- : i++) {

                // if((prevIndex-i)%9==0 || (prevIndex-i)%7 == 0){
                console.log(i, 'loop i');

                if (board[i].trim()) {
                    check = 0
                    break;
                    // }
                }
                if (difference == 7 && prevIndex > desIndex) {
                    i = i - 6
                } else if (difference == 7 && prevIndex < desIndex) {
                    i = i + 6
                } else if (difference == 9 && prevIndex > desIndex) {
                    i = i - 8
                } else {
                    i = i + 8
                }
            }

            if (check == 1) {

                if ((prevIndex - desIndex) % 9 == 0 || (prevIndex - desIndex) % 7 == 0) {
                    swap(desIndex, prevIndex, newBoard)
                    flag = true
                    animation = controlBishopAnimation(+desIndex, +prevIndex)
                }
            }
        }






    }

    return { newBoard, flag, animationValue: animation?.animationValue, animation: animation?.animationName }
}

export default handleBishop;