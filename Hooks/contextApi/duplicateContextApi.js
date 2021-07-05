//consumer 컴퍼넌트에서 데이터를 읽어드리는 경우

import { useContext } from "React";

const UserContext = React.createContext("");
const ThemeContext = React.createContext("dark");

function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="mike">
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/* ...*/}
    </div>
  );
}

function Greeting() {
  const theme = useContext(ThemeContext);
  const username = useContext(UserContext);
  return (
    <p
      style={{ color: theme === "dark" ? "gray" : "green" }}
    >{`${username}님 안녕하세요`}</p>
  );
}

import React, { useContext, createContext, useState } from "React";

// consumer 컴퍼넌트에서 데이터를 수정할 경우
const UserContext = React.createContext({ username: "", helloCount: 0 });
const SetUserContext = React.createContext(() => {});

function App() {
  const [user, setUser] = userState({ username: "mike", helloCount: 0 });

  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

function Greeting() {
  return (
    <SetUserContext.Consumer>
      {(setUser) => (
        <UserContext.Consumer>
          {({ username, helloCount }) => (
            <React.Fragment>
              <p>{`${username}님 안녕하세요`}</p>
              <p>{`인사 횟수: ${helloCount}`}</p>
              <button
                onClick={() =>
                  setUser({ username, helloCount: helloCount + 1 })
                }
              >
                인사하기
              </button>
            </React.Fragment>
          )}
        </UserContext.Consumer>
      )}
    </SetUserContext.Consumer>
  );
}
