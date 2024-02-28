function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() == value.toLowerCase()) {
      return i;
    }
  }
}

const coffees = ["Latte", "Espresso", "Cuppuchino", "Americano"];
const prices = [1.5, 0.5, 1, 2];
let updatedPrices = prices.map((elem) => elem + 0.5);

const coffeeName = prompt("Введите название кофе: ");
const coffeeIndex = indexOf(coffees, coffeeName);

if (typeof coffeeIndex !== "undefined") {
  alert(
    `Такой кофе у нас есть, он стоит на ${
      coffeeIndex + 1
    } месте по популярности. Теперь он стоит ${updatedPrices[coffeeIndex]} евро`
  );
} else {
  alert("Такого кофе у нас нет.");
}
