// 첫번째
async function myAsyncFun() {
  throw "myAsyncError";
}

function myPromiseFun() {
  return new Promise((resolve, reject) => {
    reject("myError!");
  });
}

const result1 = myAsyncFun().catch((e) => {
  console.log(e); // "myAsyncError"
});
const result2 = myPromiseFun().catch((e) => {
  console.log(e); // "myError!"
});

// 두번째
function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
      reject("wait Error");
    }, sec * 1000);
  });
}
// resolve 일때
// async function myAsyncFun() {
//   console.log(new Date()); // 2021-06-25T20:39:30.029Z
//   await wait(3); // 3초 뒤에
//   console.log(new Date()); // 2021-06-25T20:39:30.029Z
// }
// const result = myAsyncFun();

//reject 일때
async function myAsyncFun() {
  console.log(new Date()); // 2021-06-25T20:39:30.029Z
  //await wait(3).catch(e => {console.error(e);}); 이렇게 해도됨
  try {
    await wait(3); // 3초 뒤에
  } catch (e) {
    console.error(e); // wait Error
  }
  console.log(new Date()); // 2021-06-25T20:39:30.029Z
}
const result = myAsyncFun();

//reject 일때
// 이렇게 해도됨
async function myAsyncFun() {
  console.log(new Date()); // 2021-06-25T20:39:30.029Z
  // 선언해서 위에서 resolve일 경우 출력되나 reject일 경우 undefined가 나옴
  // const result = await wait(3).catch((e) => {
  //   console.error(e);
  // });
  // console.log(result);
  await wait(3).catch((e) => {
    console.error(e);
  });

  console.log(new Date()); // 2021-06-25T20:39:30.029Z
}
const result = myAsyncFun();
