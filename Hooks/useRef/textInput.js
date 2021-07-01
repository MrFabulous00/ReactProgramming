import React, { useRef, useEffect } from "react";

// function TextInput() {
//   const inputRef = useRef;

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button>저장</button>
//     </div>
//   );
// }

// 함수형 컴퍼넌트에서 ref 속성값을 사용
function TextInput({ inputRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

function Form() {
  const inputRef = useRef;
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <TextInput inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

// forwardRef 함수를 사용
const TextInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
    <button>저장</button>
  </div>
));

function Form() {
  const inputRef = useRef;
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}
