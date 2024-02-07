let password = prompt('Введите пароль');
const numbers = '1234567890';
const upperCaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';

function inString(string, substring){
    for (let i = 0; i < string.length; i++){
        if (substring === string[i]){
            return true;
        }
    }
}

function validation(password){
    if (password.length < 3 || password.length > 20){
        return false;
    } 

    let isANumber = false;
    for (let i = 0; i < password.length; i++){
        if (inString(numbers, password[i])){
            isANumber = true;
        }
    }
    if (!isANumber) {
        return false;
    }

    let isALetter = false;
    for (let i = 0; i < password.length; i++){
        if (inString(upperCaseLetters, password[i])){
            isALetter = true;
        }
    }
    if (!isALetter) {
        return false;
    }

    return true;
}

if (validation(password)) {
    alert('Пароль валидный. Добро пожаловать!');
} else {
    alert('Пароль не прошел проверку. Повторите попытку, перезагрузив страницу');
}