function checkCorrectAnswer(question, answer){
  const userAnswer = prompt(question);
  if (userAnswer == answer){
    alert(`Верно!`);
  } else {
    alert(`Неверно. Правильный ответ ${answer}`);
  }
}

checkCorrectAnswer('Сколько мне лет?', '18');
checkCorrectAnswer('Арбуз это ягода или фрукт?', 'Ягода');
checkCorrectAnswer('Сколько "c" в названии нашей страны', '2');