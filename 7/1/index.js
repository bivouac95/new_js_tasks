const queue = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];
let newQueue = [...queue];

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++){
    if (array[i] === value) {
      return i;
    }
  }
}

alert(indexOf(queue, "Кирилл"));

function leaveQueue(index) {
  alert(`${queue[index]} покинул_а очередь без посылки.`);
  newQueue.splice(indexOf(newQueue, queue[index]));
}

function getParcel(index) {
  alert(`${queue[index]} получил_а посылку и покинул_а очередь.`);
  newQueue.splice(indexOf(newQueue, queue[index]));
}

getParcel(0);
getParcel(1);
getParcel(2);
for (let i = 3; i < queue.length; i++){
    leaveQueue(i);
}
