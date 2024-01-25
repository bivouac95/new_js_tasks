let num = 5;
console.log(Number(num), Boolean(num), String(num));

let str = "5";
console.log(Number(str), Boolean(str), String(str));

let bool = false;
console.log(Number(bool), Boolean(bool), String(bool));

let ull = null;
console.log(Number(ull), Boolean(ull), String(ull));

let undef = undefined;
console.log(Number(undef), Boolean(undef), String(undef));

let vanya = {
    age: 18
};
console.log(Number(vanya), Boolean(vanya), String(vanya));

let longint = 128137267913n;
console.log(Number(longint), Boolean(longint), String(longint));

let sym = Symbol('n');
console.log(Boolean(sym), String(sym));
