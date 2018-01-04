function sum(x: number, ...restOfNumber: number[]): number{
    let result = x;
    for(let i = 0; i < restOfNumber.length; i++){
        result += restOfNumber[i];
    }
    return result;
}

let result = sum(1, 2, 3, 4, 5);
console.log(result)