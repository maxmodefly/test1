function varTest () {
  var x = 1;
  if (true) {
    var x = 2;  // มองเป็นตัวเดียวกันกับด้านนอก
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // มองเป็นคนละตัวกับด้านนอก
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
varTest()
letTest()
