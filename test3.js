class SequenceSum {
    // constructor() { }
    showSequence = function (count) {
        if (count === 0) {
            return "0 = 0"

        } else if (count < 0) {
            //-15<0
            return count + '< 0 '

        } else {
            //0+1+2+3+4+5+6 = 21
            let res = ""
            for (let i = count; i > 0; i--) {
                res += i + '+'
            }
            return res

        }

    }


}

let sum = new SequenceSum(4)
console.log(sum.showSequence(4));