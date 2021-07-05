import React, { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <InputAndSave inputRef={inputRef} />
      <button red={buttonRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

function InputAndSave({ inputRef }, buttonref) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={buttonref}>저장</button>
    </div>
  );
}

const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>
      저장
    </button>
  );
});
