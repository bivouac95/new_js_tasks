function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() == value.toLowerCase()) {
      return i;
    }
  }
}

let coffees = ["Latte", "Espresso", "Cuppuchino", "Americano"];
let coffeeName = prompt("Введите название кофе: ");
let coffeeIndex = indexOf(coffees, coffeeName);

if (typeof coffeeIndex !== "undefined") {
  alert(
    `Такой кофе у нас есть, он стоит на ${
      coffeeIndex + 1
    } месте по популярности.`
  );
} else {
  alert("Такого кофе у нас нет.");
}
