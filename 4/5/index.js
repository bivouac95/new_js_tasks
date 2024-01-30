let userString = prompt('Введите строку для обрезки').trim();
const startSliceIndex = +prompt('Введите индекс, с которого начать обрезку');
const endSliceIndex = +prompt('Введите индекс, с которым закончится обрезка строки');

alert(userString.slice(startSliceIndex, endSliceIndex));
