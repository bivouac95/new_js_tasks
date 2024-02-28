let clientsMarks = [];

function askClientMark() {
  let mark = +prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  if (mark > 0 && mark < 11) {
    clientsMarks.push(mark);
  }
}

for (let i = 0; i < 5; i++) {
  askClientMark();
}

alert(
  `Кофейня получила ${
    clientsMarks.filter((element) => element > 5).length
  } положительных отзывов`
);
alert(
  `Кофейня получила ${
    clientsMarks.filter((element) => element <= 5).length
  } отрицательных отзывов`
);
