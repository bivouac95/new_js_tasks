function showCorrectMessage(message){
  console.log(message);
}

function showErrortMessage(message){
  console.error(message);
}

function checkTextOnErrorSymbol(text, symbol, correctCallback, errorCallback){
  for (let i = 0; i < text.length; i++){
    if (text[i] == symbol){
      errorCallback(`Найден запрещенный символ "${symbol}" под индексом ${i}`);
      return;
    }
  }
  correctCallback("Строкаа прошла проверку на запрещенный символ.")
}

const text1 = 'Привет! Как дела!';
checkTextOnErrorSymbol(text1, 'а', showCorrectMessage, showErrortMessage);

const text2 = 'Крокодил';
checkTextOnErrorSymbol(text2, 'а', showCorrectMessage, showErrortMessage);

const text3 = 'ййййййййййййййй';
checkTextOnErrorSymbol(text3, 'й', showCorrectMessage, showErrortMessage);
