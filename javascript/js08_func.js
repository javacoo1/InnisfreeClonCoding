function call() {
  console.log("jh");
  console.log(20);
}

function print2dan() {
  for (let i = 1; i < 10; i++) {
    console.log(`2 X ${i} = ${2 * i}`);
  }
}

function add(a, b) {
  console.log(a + b);
}

function printGugudan(a) {
  for (let i = 1; i < 10; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
}

function printGugudan2() {
  let i1Input = document.getElementById("i1");
  console.log(i1Input);
  let i1Val = i1Input.value;
  console.log(i1Val);

  for (let i = 1; i < 10; i++) {
    console.log(`${i1Val} X ${i} = ${i1Val * i}`);
  }

  i1Input.value = "";
  i1Input.focus();
}
function printGugudan3() {
  //   let i2Input = document.getElementById("i2");
  //   console.log(i2Input);
  //   let i1Val = i2Input.value;
  //   console.log(i2Val);

  let i2Input = document.myForm.myInput;
  let i2Val = i2Input.value;

  for (let i = 1; i < 10; i++) {
    console.log(`${i2Val} X ${i} = ${i2Val * i}`);
  }

  i2Input.value = "";
  i2Input.focus();
  return false;
}
