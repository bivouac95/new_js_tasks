const goalsSorted = [8, 1, 1, 3, 2, -1, 5];
let goals = Array(goalsSorted);
goals = goalsSorted.sort((a, b) => a - b);

console.log(`Самый результаивный матч был под номером ${goals.indexOf(goalsSorted[goalsSorted.length - 1])} со счетом ${goalsSorted[goalsSorted.length - 1]}`);
console.log(`Самый нерезультаивный матч был под номером ${goals.indexOf(goalsSorted[0])} со счетом ${goalsSorted[0]}`);
console.log(`Сумма голов за сезон равна ${goalsSorted.reduce((accumulator, currentValue) => accumulator + currentValue)}`);
console.log(`Были ли автомаические поражения: ${(goals.includes(-1)) ? 'да' : 'нет'}`)
console.log(`Среднее количество голов за сезон равно ${goalsSorted.reduce((accumulator, currentValue) => accumulator + currentValue) / goalsSorted.length}`);
console.log(String(goalsSorted));