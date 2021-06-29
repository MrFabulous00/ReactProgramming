const UserContext = React.createContext("");

function App() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <UserContext.Provider value={username}>
        <Profile />
      </UserContext.Provider>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

const Profile = React.memo(() => {
  return (
    <div>
      <Greeting />
      {/* ...*/}
    </div>
  );
});

function Greeting() {
  return (
    <UserContext.Consumer>
      {(username) => <p>{`${username}님 안녕하세요`}</p>}
    </UserContext.Consumer>
  );
}
