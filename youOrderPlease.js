let str = "is2 Thi1s T4est 3a";
function order(words){
    return words.split(' ')
                .sort((a, b) => a.split('').filter(item => +item) - b.split('').filter(item => +item))
                .join(' ');
}
console.log(order(str));