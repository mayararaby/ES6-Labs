maxAndMinValue = (...parameters) => {
    let maximumNumber = Math.max(...parameters);
    let minimumNumber = Math.min(...parameters);
    return {
        maximumNumber,
        minimumNumber
    }
}
let answer = maxAndMinValue(6, 2, 9, 4, 10);
console.log(answer);