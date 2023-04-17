function pyramid(n) {
    let arr = [];
    if (n === 0) return arr;
    for (let i = 1; i <= n; i++) {
        let a = new Array(i).fill(1);
        arr.push(a);
    }
    return arr;
}
console.log(pyramid(2));