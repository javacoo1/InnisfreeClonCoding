// login.html
function login() {
  let nameInput = document.getElementById("user-name");
  const idInput = document.querySelector("#user-id");
  const pwInput = document.querySelector("#user-pw");

  console.log(nameInput);
  console.log(idInput);
  console.log(pwInput);

  const nameVal = nameInput.value;
  const idVal = idInput.value;
  const pwVal = pwInput.value;

  console.log(nameVal);
  console.log(idVal);
  console.log(pwVal);

  if (nameVal == "") {
    alert("너 이름이 뭐야");
    nameInput.focus();
    return;
  }
  if (idVal == "") {
    alert("너 id가 뭐야");
    idInput.focus();
    return;
  }
  if (pwVal == "") {
    alert("너 pw이 뭐야");
    pwInput.focus();
    return;
  }

  location.href =
    "loginOutput.html?name=" + nameVal + "&id=" + idVal + "&pw=" + pwVal;
}

function login2() {
  let nameVal = document.getElementById("user-name").value;
  const idVal = document.querySelector("#user-id").value;
  const pwVal = document.querySelector("#user-pw").value;

  console.log(nameVal);
  console.log(idVal);
  console.log(pwVal);

  document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
    <script src="login.js"></script>
  </head>
  <body onload="setVal()">
    <table border="1" id="site-tbl">
      <tr>
        <td><a href="index.html">이진현의 영역전개</a></td>
      </tr>
    </table>
    <table border="1" id="site-menu-tbl">
      <tr>
        <td><a href="menu.html">menu1</a></td>
        <td><a href="join.html">가입</a></td>
        <td><a href="slide.html">슬라이드</a></td>
        <td><a href="https://naver.com">네이버로</a></td>
        <td><a href="login.html">로그인</a></td>
        <td><a href="age.html">나이</a></td>
      </tr>
    </table>
    <table border="1" id="content-tbl">
      <tr>
        <td>
          <table border="4" id="login-tbl">
            <tr>
              <td>이름</td>
              <td id="name-td-login">${nameVal}</td>
            </tr>
            <tr>
              <td>ID</td>
              <td id="id-td-login">${idVal}</td>
            </tr>
            <tr>
              <td>PW</td>
              <td id="pw-td-login">${pwVal}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`);
}

function login3(btn) {
  let nameVal = document.getElementById("user-name").value;
  const idVal = document.querySelector("#user-id").value;
  const pwVal = document.querySelector("#user-pw").value;

  console.log(nameVal);
  console.log(idVal);
  console.log(pwVal);

  const nameTd = document.querySelector("#name-td-login");
  const idTd = document.querySelector("#id-td-login");
  const pwTd = document.querySelector("#pw-td-login");

  //   document.getElementById("user-name").remove();
  //   nameTd.innerText = nameVal;
  nameTd.innerHTML = "<h2>" + nameVal + "</h2>";
  idTd.innerHTML = "<h2>" + idVal + "</h2>";
  pwTd.innerHTML = "<h2>" + pwVal + "</h2>";

  //   1. id를 부여하고 그거 삭제
  //   document.querySelector("#button-login").remove();

  // 2. 클릭한 그 버튼의 부모의 부모를 삭제
  console.log(btn);
  btn.parentNode.parentNode.remove();
}

// loginOutput.html
function setVal() {
  const urlVals = new URL(location.href).searchParams;
  const name = urlVals.get("name");
  const id = urlVals.get("id");
  const pw = urlVals.get("pw");

  console.log(name);
  console.log(id);
  console.log(pw);

  const nameTd = document.getElementById("name-td-login");
  const idTd = document.querySelector("#id-td-login");
  const pwTd = document.querySelector("#pw-td-login");

  console.log(nameTd);
  console.log(idTd);
  console.log(pwTd);

  nameTd.innerHTML = "<h2>" + name + "</h2>";
  idTd.innerHTML = "<h2>" + name + "</h2>";
  pwTd.innerHTML = "<h2>" + name + "</h2>";
}
