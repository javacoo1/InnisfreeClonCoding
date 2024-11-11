// alert(test2);
console.log("test2");

function call() {
  const nameE1 = document.getElementById("my-name");

  const idE1 = document.querySelector("#my-id");

  const pwE1 = document.querySelector("#my-pw");

  const nameVal = nameE1.value;
  const idVal = idE1.value;
  const pwVal = pwE1.value;

  console.log(nameVal);
  console.log(idVal);
  console.log(pwVal);

  if (nameVal == "") {
    alert("이름을 입력해주세요");
    nameE1.focus();
    return;
  }
  if (idVal == "") {
    alert("ID를 입력해주세요");
    idE1.focus();
    return;
  }
  if (pwVal == "") {
    alert("PW를 입력해주세요");
    pwE1.focus();
    return;
  }

  location.href =
    "test3.html?name=" + nameVal + "&id=" + idVal + "&pw=" + pwVal;
}
