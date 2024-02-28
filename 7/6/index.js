const numbers = [10, 4, 100, -5, 54, 2];

//1 способ
let result1 = 0;
for (let i = 0; i < numbers.length; i++) {
  result1 += numbers[i] ** 3;
}

//2 способ
let result2 = 0;
for (let i of numbers) {
  result2 += i ** 3;
}

//3 способ
let result3 = 0;
numbers.forEach((element) => {
  result3 += element ** 3;
});

//4 способ
let result4 = numbers.reduce(
  (accumulator, currentValue) => (accumulator += currentValue ** 3)
);

alert(
  `Результат 1: ${result1}, Результат 2: ${result2}, Результат 3: ${result3}, Результат 4: ${result4}`
);
