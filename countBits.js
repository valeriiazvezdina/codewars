var countBits = function(n) {
    let counter = 0;
    n.toString(2).split('').forEach(item => (item == 1) ? counter++ : counter);
    return counter;
};
console.log(countBits(1234))