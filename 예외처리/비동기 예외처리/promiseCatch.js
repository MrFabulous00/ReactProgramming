function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error!");
    }, sec * 1000);
  });
}

wait(3).catch((e) => {
  console.log("1st catch", e); // '1st catch' 'error!'
});

// 첫번째
// then처럼 계속 호출시 두번째 catch가 출력 안됨
// 보톹 객체의 체인은 같은 객체를 바라보는데 첫번째 catch는 위에 promise의 함수를 바라보고 두번째 catch는 첫번째 catch를 바라봄
// 띠라서 첫번째 catch가 에러를 잡아내서 두번쨰 catch에서는 예외가 발생하지 않아 작동 안됨
wait(3)
  .catch((e) => {
    console.log("1st catch", e); // '1st catch' 'error!'
    // throw e; 추가하면 두번째 '2nd catch' 'error!' 출력
  })
  .catch((e) => {
    console.log("2nd catch", e);
  });

// 두번째
// then을 사용
wait(3)
  .then(
    () => {
      console.log("done!!");
    },
    (e) => {
      console.log("1st catch in Then", e); // "1st catch in Then"
    }
  )
  .catch((e) => {
    console.log("2nd catch", e); // 첫번째와 동일한 이유로 출력 안됨
  });
