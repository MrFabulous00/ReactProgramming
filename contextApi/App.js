// context API 사용x
// function App() {
//   return (
//     <div>
//       <div>상단 메뉴</div>
//       <Profile username="mike" />
//       <div>하단 메뉴</div>
//     </div>
//   );
// }

// function Profile({ username }) {
//   return (
//     <div>
//       <Greeting username={username} />
//       {/* ...*/}
//     </div>
//   );
// }

// function Greeting({ username }) {
//   return <p>{`${username}님 안녕하세요`}</p>;
// }

// context API 사용o
const UserContext = React.createContext("");

function App() {
  return (
    <div>
      <UserContext.Provider value="mike">
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
      </UserContext.Provider>
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
  return (
    <UserContext.Consumer>
      {(username) => <p>{`${username}님 안녕하세요`}</p>}
    </UserContext.Consumer>
  );
}
