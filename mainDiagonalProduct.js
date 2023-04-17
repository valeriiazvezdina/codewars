let m1 = [[1,2,3],[4,5,6],[7,8,9]];
let m2 = [[1,0],[0,1]];
function mainDiagonalProduct(mat) {
    let product = 1;
    mat.forEach((item,index) => product *= mat[index][index]);
    return product;
}
console.log(mainDiagonalProduct(m2))