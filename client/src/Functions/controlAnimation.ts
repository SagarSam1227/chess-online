export function controlPawnAnimation(des: number, prev: number) {
    if (prev - des == 16) {
        return {
            from: 'from { top: 0px;}',
            to: 'to { top: -148px; }'
        }
    }
    else {
        return {
            from: 'from { top: 0px;}',
            to: 'to { top: -73px; }'
        }
    }
}






export function controlBishopAnimation(des: number, prev: number) {
    let animationName: string = ''
    let animationValue: { from: string; to: string } = { from: '', to: '' }
    console.log('controlBishopAnimation');



    if ((prev - des) % 9 == 0 && prev > des) {
        console.log('cornerrr');

        animationName = 'center-to-up-left-corner'
        const count: number = findingCount((prev - des), 9)
        animationValue.from = `from {left: 0px; top: 0px; }`
        animationValue.to = `to {left: -${count * 73}px; top: -${count * 73}px; }`
    }



    else if ((prev - des) % 9 == 0 && prev < des) {
        animationName = 'center-to-down-right-corner'
        const count: number = findingCount((des - prev), 9)
        animationValue.from = `from {left: 0px; top: 0px; }`
        animationValue.to = `to {left: ${count * 73}px; top: ${count * 73}px; }`
    }


    else if ((prev - des) % 7 == 0 && prev > des) {
        animationName = 'center-to-up-right-corner'
        const count: number = findingCount((prev - des), 7)
        animationValue.from = `from {right: 0px; top: 0px; }`
        animationValue.to = `to {right: -${count * 73}px; top: -${count * 73}px; }`
    }


    else {
        animationName = 'center-to-down-left-corner'
        const count: number = findingCount((des - prev), 7)
        animationValue.from = `from {right: 0px; top: 0px; }`
        animationValue.to = `to {right: ${count * 73}px; top: ${count * 73}px; }`
    }



    function findingCount(number: number, divisor: number) {

        let count: number = 0

        while (true) {
            console.log(count);

            count++
            if (divisor * count == number) {
                break;
            }
        }



        return count
    }


    console.log(animationName, 'pppppppppp');

    return { animationName, animationValue }
}







export function controlKngihtAnimation(des: number, prev: number, diff: number) {
    let animationName: string = ''
    let animationValue: { from: string; to: string } = { from: '', to: '' }

    if (diff == 6) {
        if (prev > des) {
            animationName = 'center-to-up-right-corner'
            animationValue.from = `from {right: 0px; top: 0px; }`
            animationValue.to = `to {right: -${148}px; top: -${80}px; }`
        } else {
            animationName = 'center-to-down-left-corner'
            animationValue.from = `from {right: 0px; top: 0px; }`
            animationValue.to = `to {right: ${148}px; top: ${80}px; }`
        }
    }



    else if (diff == 10) {

        if (prev > des) {
            animationName = 'center-to-up-left-corner'
            animationValue.from = `from {left: 0px; top: 0px; }`
            animationValue.to = `to {left: -${148}px; top: -${80}px; }`
        } else {
            animationName = 'center-to-down-right-corner'
            animationValue.from = `from {left: 0px; top: 0px; }`
            animationValue.to = `to {left: ${148}px; top: ${80}px; }`
        }
    }







    else if (diff == 17) {
        if (prev > des) {
            animationName = 'center-to-up-left-corner'
            animationValue.from = `from {left: 0px; top: 0px; }`
            animationValue.to = `to {left: -${80}px; top: -${148}px; }`
        } else {
            animationName = 'center-to-down-right-corner'
            animationValue.from = `from {left: 0px; top: 0px; }`
            animationValue.to = `to {left: ${80}px; top: ${148}px; }`
        }
    }



    else if (diff == 15) {
        if (prev > des) {
            animationName = 'center-to-up-right-corner'
            animationValue.from = `from {right: 0px; top: 0px; }`
            animationValue.to = `to {right: -${80}px; top: -${148}px; }`
        } else {
            animationName = 'center-to-up-right-corner'
            animationValue.from = `from {right: 0px; top: 0px; }`
            animationValue.to = `to {right: ${80}px; top: ${148}px; }`
        }
    }







    return {
        animationName, animationValue
    }
}







export function controlRookAnimation(des: number, prev: number, count: number, direction: string | null) {
    let animationName: string = ''
    let animationValue: { from: string; to: string } = { from: '', to: '' }


    animationName = `center-to-${direction}`
    animationValue.from = `from {${direction == 'top' || direction == 'down' ? 'top' : 'left'}: 0px;}`
    animationValue.to = `to {${direction == 'top' || direction == 'down' ? 'top' : 'left'}: ${prev > des ? -(count * 73) : (count * 73)}px; }`


    console.log(animationName, animationValue);




    return { animationName, animationValue }

}