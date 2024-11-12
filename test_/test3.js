// alert(test3);
console.log("test3");

let urlVals = new URL(location.href).searchParams;
let nameVal = urlVals.get("name");
let idVal = urlVals.get("id");
let pwVal = urlVals.get("pw");

console.log(nameVal);
console.log(idVal);
console.log(pwVal);

let bodyEl = document.querySelector("body");
console.log(bodyEl);

// bodyEl.innerHTML =
//   "<h1>이름: " +
//   nameVal +
//   "</h1><h1>Id: " +
//   idVal +
//   "</h1><h1>Pw: " +
//   pwVal +
//   "</h1>";

let content = `<h1>이름 : ${nameVal}</h1> 
<h1>Id : ${idVal}</h1>
 <h1>pw : ${pwVal}</h1>`;

document.write(content);
