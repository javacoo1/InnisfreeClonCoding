console.log("05번입니다.");

/*
    논리(비교) 연산자 : 결과 bool인거
    >, >=, <, ...
 */

let x = 10;
let y = 20;
console.log(x > y);

/*
    결합 연산자 : 놀리연산자 묶은거
    &&, ||, !(Not)
*/

let a = x > y && y < 20;
console.log(a);

/* 
    삼항 연산자 : 둘 중 하나
    조건 ? true : false
*/

//  나이가 10살 넘으면  welcome 아니면 go home
let age = 5;
let say;
if (age > 10 ? (say = "welcome") : (say = "go home")) {
  console.log(say);
}
//  입장료
let ticket = 10000;

//  나이가 10살 넘으면 1000원, 아니면 500원 할인
let dc = age > 10 ? "1000" : "500";
let total = ticket - dc;

//  결과 출력
//  총금액 : oo
console.log("총 금액 : " + total);

//  같다 ==, ===

let stringNum = "10";
let numberNum = 10;

//  ==타입을 안따짐
console.log(stringNum == numberNum);
console.log(stringNum != numberNum);
//  ===타입을 따짐
console.log(stringNum === numberNum);
console.log(stringNum !== numberNum);

console.log("----------------------");

//  object
let me1 = { name: "jh", age: 20 }; //객체
let me2 = { name: "jh", age: 20 }; //객체
let me3 = me1;

console.log(me1);
console.log(me1 == me2);
console.log(me1 === me2);

console.log(me1 == me3);
console.log(me1 === me3);

console.log("---------------------");

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);

console.log("" == false);
console.log("" === false);
