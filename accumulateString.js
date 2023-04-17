// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    return s.split('').map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index)).join('-');
}
console.log(accum('RqaEzty'))