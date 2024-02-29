function getMathResult(array){
    //валидация
    let index = 0;
    for(let element of array) {
        if (!Number(element) && Number(element) != 0){
            if (!['+', '-', '=', '/', '*'].includes(element)){
                array.splice(index, 1);
            }
        }
        index++;
    };
    if (array.length !== 3){
        return('Ошибка');
    }

    //выполнение исчислений
    switch (array[1]) {
        case '+':
            return array[0] + array[2];
            break;
        
        case '-':
            return array[0] - array[2];    
            break;

        case '=':
            return array[0] == array[2];    
            break;

        case '/':
            return array[0] / array[2];    
            break;

        case '*':
            return array[0] * array[2];    
            break;
        
        default:
            return 'Неверный формат передачи данных';
    }
}

console.log(getMathResult([5, '6', 8]))