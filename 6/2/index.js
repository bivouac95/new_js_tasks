function getSumOfNumbers(number, type = 'odd'){
    let result = 0;
    switch(type){
        case 'odd':
            for (let i = 0; i <= number; i++){
                if (i % 2 == 1){
                    result += i;
                }
            }
            break;

        case 'even':
            for (let i = 0; i <= number; i++){
                if (i % 2 == 0){
                    result += i;    
                }
            }
            break;
            
        case '':
            for (let i = 0; i <= number; i++){
                result += i;
            }
            break;
            
    }
    return result;
}

alert(getSumOfNumbers(10, 'odd'));
alert(getSumOfNumbers(10, 'even'));
alert(getSumOfNumbers(10, ''));