function mainDiagonalProduct(mat){
    let prod = 1;
    // for (let i = 0; i < mat.length; i++) {
    //     prod = prod * mat[i][i];
    // }
    mat.map((val ,index) => prod *= val[index]);
    return prod;
}

console.log(mainDiagonalProduct([[1, 1, 0],[0, 2, 0],[0, 0, 3]]));