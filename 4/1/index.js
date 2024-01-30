const myName = 'Ваня';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Никита Михайлович';
const reasonText = 'я хочу создавать что-то хорошее';
const numberOfMonth = '10';

const resultMessage1 = 'Всем привет! Меня зовут ' + myName + '. Сейчас я изучаю язык программирования ' + programmingLanguage +' на кyрсе по ' + programmingLanguage + ' y ' + courseCreatorName + '. Я хочу стать веб-разработчиком, потому что ' + reasonText + '. До этого я изучал ' + programmingLanguage + ' '+ numberOfMonth + ' месяцев. Я уверен, что пройду данный курс до конца!';
const resultMessage2 = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на кyрсе по ${programmingLanguage} y ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

console.log(resultMessage1, '=======================', resultMessage2)