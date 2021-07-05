import React, { useEffect, useState } from "React";
import useWindowWidth from "../customHook/useWindowWidth";

export default function WidthPrinter() {
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const onResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", onResize);
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, []);

  const width = useWindowWidth();
  return <div>{`Width is ${width}`}</div>;
}
