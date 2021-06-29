function MyComponent() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  console.log("render called");
  return (
    <div>
      <h2>{count.value}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
