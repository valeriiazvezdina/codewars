// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let map = new Map();
    arr.forEach((item) => {
        map.set(item.toLowerCase().split('').sort().join(''), item)
    })
    return [...map.values()]
}
console.log( aclean(arr) );