function getSumOfSequence(index) {
  let sequence = [];
  for (let i = 1; i <= index; i++) {
    sequence.push(i);
  }

  return sequence[0] + sequence[sequence.length - 1];
}

alert(getSumOfSequence(5));
