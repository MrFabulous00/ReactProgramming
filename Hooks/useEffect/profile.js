import React, { useEffect, useState } from "react";
import useUser from "../customHook/useUser";

function Profile({ userId }) {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   getUserApi(userId).then((data) => setUser(data));
  // }, [userId]);

  const user = useUser(userId);

  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중 ...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

// const USER1 = { name: "mike", age: 23 };
// const USER2 = { name: "jane", age: 31 };
// function getUserApi(userId) {
//   setTimeout(() => {
//     res(userId % 2 ? USER1 : USER2);
//   });
// }
