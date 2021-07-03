import React, { useState } from "react";
import Counter from "./Counter";

// 상태값
export default function App() {
  const [color, setColor] = useState("red");

  function onClick() {
    setColor("blue");
  }
  return <button style={{ backgroundColor: color }}>좋아요</button>;
}
