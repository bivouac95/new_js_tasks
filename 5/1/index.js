const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';

let login = prompt('Введите логин').trim();
let password = prompt('Введите пароль').trim();

if (login === existedUserLogin && password === existedUserPassword){
    alert(`Добро пожаловать ${login}!`);
} else {
    alert('Неправильный логин и (или) пароль');
};