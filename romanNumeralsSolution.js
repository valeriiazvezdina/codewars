let RomanMap = new Map([['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['IV', 4], ['I', 1]]);
// console.log(RomanMap.get())
function oneLetter(n) {
    for (let [key, value] of RomanMap) {
        if (value === n) return key;
    }
}
function solution(num) {
    // let s = 0;
    // let numArr = num.toString().split('');
    // for (let i = 0; i < numArr.length; i++) {
    //     if (numArr[i] < numArr[i+1]) {
    //         s = oneLetter(numArr[i]) + oneLetter(numArr[i+1]);
    //     }
    // }
    // return s;
    return oneLetter(num);
}
console.log(solution(100));