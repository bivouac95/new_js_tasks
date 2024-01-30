let userText = prompt('Введите текст');
let wordFromText = prompt('Введите слово');
let result = userText.slice(0, userText.indexOf(wordFromText));
alert(`Результат ${result}`);