// import React, { useEffect, useState } from "React";

// function WidthPrinter() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const onResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", onResize);
//     return () => {
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);
//   return <div>{`Width is ${width}`}</div>;
// }

import React, { useState, useEffect } from "React";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return width;
}
