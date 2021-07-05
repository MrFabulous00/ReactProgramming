import React from "React";
import Title from "./Title";

export default function Counter() {
  const [count, setCount] = useState({ value1: 0, value2: 0, value3: 0 });

  function onClick() {
    setCount({ ...count, value: count.value + 1 });
  }

  return (
    <div>
      <Title title={`현재 카운트: ${count}`} />
      <button onClick={onClick}>증가</button>
    </div>
  );
}
