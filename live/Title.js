import React from "React";

// 속성값
function Title(title) {
  return <p>{title}</p>;
}

export default React.memo(Title);
