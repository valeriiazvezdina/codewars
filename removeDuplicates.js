let str = "js, python, .net, python";
let str2 = "Redev, FE, Redev, BE";
const removeDuplicates = (str) => {
    return [...new Set(str.split(',').map(item => item.trim()))].join(', ');
}
console.log(removeDuplicates(str));
console.log(removeDuplicates(str2));