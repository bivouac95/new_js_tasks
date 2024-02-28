function createMatrix(num){
    let matrix = [];
    for (let i = 0; i < num; i ++){
        let subArray = []
        for (let j = 0; j < num; j++){
            subArray.push(j+1);
        }

        matrix.push(subArray);
    }
    return matrix;
}

console.log(createMatrix(5));