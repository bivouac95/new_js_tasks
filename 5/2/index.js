let correctAnswers = 0;
let wrongAnswers = 0;

const quastions = [
    'Сколько будет 2+2?',
    'Сколько будет 2*2?',
    'Сколько будет 2^3?',
    'Сколько будет 2+2*2?',
    'Сколько будет 5*8?'
];

const answers = [4, 4, 8, 6, 40];

for (let index = 0; index < quastions.length; index++) {
    const ans = +prompt(quastions[index]);
    if (ans == answers[index]) {
        alert('Правильно');
        correctAnswers ++;
    } else {
        alert('Кринж. Неправвлаьно')
        wrongAnswers ++;
    }
}

alert(`Вы успешно прошли тест! Правильных ответов ${correctAnswers}, неправильных ${wrongAnswers}`);