const val1 = console.log;
const val2 = {name: 'Maxim'};
const val3 = Symbol('key');
const val4 = Number;
const val5 = '';
const val6 = 0;
const val7 = -10;
const val8 = '-105';

console.log(String(val1), Number(val1), Boolean(val1));
console.log(String(val2), Number(val2), Boolean(val2));
console.log(String(val3),/*Number(val3),*/ Boolean(val3));
console.log(String(val4), Number(val4), Boolean(val4));
console.log(String(val5), Number(val5), Boolean(val5));
console.log(String(val6), Number(val6), Boolean(val6));
console.log(String(val7), Number(val7), Boolean(val7));
console.log(String(val8), Number(val8), Boolean(val8));