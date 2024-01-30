const myName = 'Ваня';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Никита Михайлович';
const reasonText = 'я хочу создавать что-то хорошее';
const numberOfMonth = '10';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на кyрсе по ${programmingLanguage} y ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
myInfoText = myInfoText.replaceAll('JavaScript', 'JavaScript'.toUpperCase());
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0],myInfoText[myInfoText.length-1]);