let age = 20;
console.log(age);
console.log(typeof age);

/*
    string, number, boolean, null, 
    object, undefined, func, ...
*/

//   var의 문제점

//   1. hoisting 위로 끌어올려짐

console.log(whyDontUse); //  에러가 아니라, undefined가 뜸
whyDontUse = 111;
var whyDontUse;

//   2. ignore block 영역 무시함
{
  var whyDontUse2;
  whyDontUse2 = 222;

  let whyUse;
  whyUse = 333;
  console.log(whyUse);
}

console.log(whyDontUse2);
console.log(whyUse);
