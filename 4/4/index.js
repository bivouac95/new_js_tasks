let userName = prompt('Введите имя');
userName = userName.trim();
userName = userName.toLowerCase();

let userAge = prompt('Сколько вам лет?')
userAge = Number(userAge.trim());
if (isNaN(userAge)){
    alert("Ну введите норм число пж");
}

alert(`Вас зовут ${userName} и вам ${userAge} лет`);