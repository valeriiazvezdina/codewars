// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(iterable) {
    let unique = [];
    if (typeof iterable == 'string') iterable = iterable.split('');
    iterable.map((val,i,arr) => {
        if (!arr[i-1]) unique.push(arr[i]);
        if (arr[i-1] == arr[i]) unique.push(arr[i]);
    });
    return unique;
}

console.log(uniqueInOrder([1,2,2,3,3,4,5,5,6]));
console.log(uniqueInOrder('ABBCcAD'));
// 'ABBCcAD'.split('').map(val => console.log(val));