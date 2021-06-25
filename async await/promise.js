function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

console.log("start", new Date().toISOString()); // 'start' '2021-06-25T16:02:24.522Z'

// 위에 콘솔이 먼저 나오고 아래 콘솔 새개가 동시나 출력
delay(1, (result) => {
  console.log(1, result); // 1 '2021-06-25T16:02:25.526Z'
});
delay(1, (result) => {
  console.log(1, result); // 1 '2021-06-25T16:02:25.526Z'
});
delay(1, (result) => {
  console.log(1, result); // 1 '2021-06-25T16:02:25.526Z'
});

// 1초 간격으로 출력이 된다. => 복잡해지면 가독성이 떨어짐(Promise / async await의 필요)
delay(1, (result) => {
  console.log(1, result);
  delay(1, (result) => {
    console.log(1, result);
    delay(1, (result) => {
      console.log(1, result);
    });
  });
});

//Promise
function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayP(1).then((result) => {
  console.log(1, result); // 1 '2021-06-25T16:02:25.526Z'
});

// 1초 간격으로 출력이 된다.
delayP(1)
  .then((result) => {
    console.log(1, result); // 1 '2021-06-25T16:02:25.526Z'
    return delayP(1);
  })
  .then((result) => {
    console.log(2, result); // 2 '2021-06-25T16:02:25.526Z'
    return delayP(1);
  })
  .then((result) => {
    console.log(3, result); // 3 '2021-06-25T16:02:25.526Z'
  })
  .then((result) => {
    console.log(result); // undefined (위에 then에서 아무것도 리턴하지 않아서)
  });
