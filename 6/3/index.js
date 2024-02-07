function getSumOfNumbers(number){
    let result = 0;
    for (let i = 0; i <= number; i++){
        if (number % i == 0){
            result ++;
        }
    }
    return result;
}

alert(getSumOfNumbers(12));