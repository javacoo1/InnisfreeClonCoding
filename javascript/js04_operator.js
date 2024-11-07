console.log("js04_operator.js입니다");

let a = 1;
let b = "1";

let c = a + b;
console.log(c);
console.log(typeof c);

console.log(a / b); //  타입이 다이나믹하게 결정됨

let d = a / b;
console.log(typeof d);

console.log("1.--------------");
//  + - / * %

//  문자 연산자
let hi = "hi~";
let hi2 = "jh!";

console.log(hi - hi2);
//  NaN (Nat a Number)

let x = 1;
x = x + 1;
console.log(x);

x += 1;
console.log(x);

x++;
console.log(x);
