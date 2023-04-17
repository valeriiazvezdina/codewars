// should be 6: [4, -1, 2, 1]
function maxSequence(arr){
    let currentSum = 0;
    let maxSum = 0;
    if(arr.length === 0){
        return 0;
    }
    arr.forEach(item => {
      currentSum = Math.max(item, currentSum + item);
      maxSum = Math.max(maxSum, currentSum);
    })
    return maxSum;
  }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-1, -2, -3, -4, -5]))
// console.log(maxSequence([]))
