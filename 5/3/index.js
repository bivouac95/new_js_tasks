let correctAnswers = 0;
let wrongAnswers = 0;

const quastions = [
    'JavaScript появился в 1995 году?',
    'Спецификация JavaScript называется ECMAScript?',
    'JavaScript был создан за один месяц?'
];

const answers = [true, true, true];
const trueAnswers = [
    'JavaScript появился в 1995 году.',
    'Спецификация JavaScript называется ECMAScript.',
    'JavaScript был создан за один месяц.'
];

for (let index = 0; index < quastions.length; index++) {
    const ans = confirm(quastions[index]);
    if (ans == answers[index]) {
        alert('Правильно');
        correctAnswers ++;
    } else {
        alert('Неверно. ' + trueAnswers[index])
        wrongAnswers ++;
    }
}

alert(`Вы успешно прошли тест! Правильных ответов ${correctAnswers}, неправильных ${wrongAnswers}`);