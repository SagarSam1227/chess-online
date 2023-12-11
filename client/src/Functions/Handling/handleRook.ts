import { controlRookAnimation } from "../controlAnimation";
import { swap } from "../controlMoves";
import { checkBackground } from "../controlStyle";

function handleRook(des: number, prev: number, board: string[]){
    let flag:boolean = false
    let animation: { animationValue: { from: string; to: string }, animationName: string } = { animationValue: { from: '', to: '' }, animationName: '' }
    const newBoard:string[] = [...board];
    let direction:null | string  = null

    let count:number = 0




    if (!board[des].trim()) {


        if(Math.abs(prev-des)%8==0){
            console.log('entered first cond');
            
            for (let i = prev>des?prev-8:prev+8; 
                prev > des ? i >= des : i <= des; 
                prev > des ? i-- : i++) {

                    console.log('first loop ',i);
                    
                    
                    if(newBoard[i].trim()){
                        flag = false
                        break;
                    }else{
                        direction = prev>des?'top':'down'
                        count++
                        flag=true
                    }
                    i=prev>des?i-7:i+7
            }
        }else{

            console.log('entered secnd cond');
            
            let prevIndex :number = 99
            for (let i = prev; 
                prev > des ? i >= des : i <= des; 
                prev > des ? i-- : i++) {

                    console.log('entered loop ',i);
                    

                    const isBgSame = checkBackground(prevIndex,i)

                    console.log(isBgSame);
                    
                    if(i!=prev){
                        if(isBgSame){
                            flag = false
                            break;
                        }else{
                            if(newBoard[i].trim()){
                                flag = false
                                break;
                            }else{
                                count++
                                direction = prev>des?'left':'right'
                                flag=true
                            }
                        }
                    }
                    prevIndex = i
                }
        }


        if(flag){

            console.log(count,direction);
            
            swap(des,prev,newBoard)
            animation = controlRookAnimation(des,prev,count,direction)
        }

}
    





    return { newBoard, flag, animationValue: animation?.animationValue, animation: animation?.animationName }

}

export default handleRook;