import React from "react";


function Calc(arg) {
    const nonNumber = (list, from=0) => {
        let nextIndex = list.length;
        for (let i=from; i < list.length; i++) {
            if (isNaN(list[i])) {
                nextIndex = i;
                break;
            }
        }
        return nextIndex;
    }

    const createValidInputArr = (list) => {
        list = list.replace('/g', '').split('');
        list.forEach((item, index, self) => {
            if(!isNaN(item)) {
                const start = index;
                const end = nonNumber(self, start);
                const result = self.slice(start, end).join("");

                if (start !== end) {
                    list.splice(start, result.length, result);
                }
            }
        })
        return list;
    }

    const pairBrackets = (s, i=0) => {
        let isMatched = false;
        let open = [];
        let close = [];
        s.forEach((item, index) => {
            if (!isMatched) {
                if (item === ')') {
                    close = [index, ...close];
                }
                if (open.length && open.length === close.length) {
                    isMatched = true;
                }
            }
        })
        return [open[0], close[0]];
    }

    function Calcul(calculate) {
        let calclist = createValidInputArr(calculate);
        const makeCalc = (x) => {
            const makeOperation = (operation) => {
                if (x.indexOf(operation) > 0) {
                    const start = x.indexOf(operation);
                    const operand1 = Number(x[start - 1]);
                    const operand2 = Number(x[start + 1]);
                    let result = null;


                    switch (operation) {
                        case "+":
                            result = operand1 + operand2;
                            break;
                        case "-":
                            result = operand1 - operand2;
                            break;
                        case "*":
                            result = operand1 * operand2;
                            break;
                        case "/":
                            result = operand1 / operand2;
                            break;
                        default:
                            break;
                    }
                    x.splice(start - 1, 3, result);
                    makeCalc(x);
                }
            };

            if (x.indexOf('(') >= 0) {
                const [open, close] = pairBrackets(x);
                const brackets = x.slice(open + 1, close)

                x.splice(open, brackets.length + 2, ...makeCalc(brackets));
                makeCalc(x);
            }
            makeOperation("/");
            makeOperation("*");
            makeOperation("+");
            makeOperation("-");
            return x;
        }
        return makeCalc(calclist).join(" ");
    }
    return Calcul(arg);
}

export default Calc;