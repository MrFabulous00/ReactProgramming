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
import React, { createContext, useContext } from "React";

const UserContext = React.createContext(""); // Provider를 찾지 못하면 이걸로 이걸로 초기값으로 할당

export default function App() {
  const [name, setName] = useState("mike");
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}

// function Greeting() {
//   return (
//     <UserContext.Consumer>
//       {(username) => <p>{`${username}님 안녕하세요`}</p>}
//     </UserContext.Consumer>
//   );
// }
