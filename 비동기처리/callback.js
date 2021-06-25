function fakeSetTimeout(callback, delay) {
  callback();
}

// fake callback(동기적)
// 0 hello 1 순으로 출력
console.log(0);
fakeSetTimeout(function () {
  console.log("hello");
}, 0);
console.log(1);

// callbaack(비동기적)
// 0 1 hello 순으로 출력
console.log(0);
SetTimeout(function () {
  console.log("hello");
}, 0);
console.log(1);
