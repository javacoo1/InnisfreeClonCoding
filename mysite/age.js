function calcAge(age) {
  const birthInput = document.getElementById("user-birth");

  let date = new Date();
  //   console.log(date);
  let year = date.getFullYear();

  //   console.log(year);
  let ageVal = year - birthInput.value + 1;

  console.log(birthInput);
  console.log(ageVal);

  const ageTd = document.querySelector("#age-td");

  ageTd.innerHTML = "<h2>당신의 나이는 " + ageVal + "살 입니다.</h2>";
}

function calcAge2(age) {
  const birthInput = document.getElementById("user-birth");

  let date = new Date();
  //   console.log(date);
  let year = date.getFullYear();

  //   console.log(year);
  let ageVal = year - birthInput.value + 1;

  console.log(birthInput);
  console.log(ageVal);

  window.open(
    "agePopup.html?aaa=" + age,
    "",
    "top=300, left=-1000, width=800,height=200"
  );
  // const ageTd = document.querySelector("#age-td");

  // ageTd.innerHTML = "<h2>당신의 나이는 " + ageVal + "살 입니다.</h2>";
}

// validateInput(input) {
//     // 최대 4자리
//     if (input.value.length > 4) {
//         input.value = input.value.slice(0,4);
//     }
// }

function agePopup() {
  const urlVals = new URL(location.href).searchParams;
  const age = urlVals.get("aaa");
  console.log(age);
  document.querySelector("body").innerText =
    "당신의 나이는" + age + "살 입니다.";
}
