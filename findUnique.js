function findUniq(arr) {
    return +arr.filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item)).join('');
}
let array1 = [1,0,0];

console.log(findUniq(array1));
