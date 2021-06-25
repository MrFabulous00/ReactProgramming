// "will: f1";
// "f1 start";
// "f2 start";
// "f2 end";
// "f1 end";
// "did: f1";
function f2() {
  console.log("f2 start");
  console.log("f2 end");
}

function f1() {
  console.log("f1 start");
  f2();
  console.log("f1 end");
}

console.log("will: f1");
f1();
console.log("did: f1");

// "will: f1";
// "f1 start";
// "f2 start";
// Error: '에러'
// "f1 end";
// "did: f1";
function f2() {
  console.log("f2 start");
  throw new Error("에러");
  console.log("f2 end");
}

function f1() {
  console.log("f1 start");
  try {
    f2();
  } catch (e) {
    console.log(e);
  }
  console.log("f1 end");
}

console.log("will: f1");
f1();
console.log("did: f1");
