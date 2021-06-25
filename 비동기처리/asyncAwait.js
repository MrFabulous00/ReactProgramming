function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

// async(그 함수를 Promise로 리턴하는 함수로 만들어 줌)
async function myAsync() {
  return "async";
}

myAsync().then((result) => {
  console.log(result); // 'async'
});

async function myAsync() {
  // 일반 함수 리턴값을 받아서 사용 가능
  // const result = await delayP(3).then((time) => {
  //   return "x";
  // });
  // console.log(result);
  // return "async";

  await delayP(3); // await을 하는 동안 return을 하지 않음
  return "async";
}

myAsync().then((result) => {
  console.log(result); // 'async'
});
