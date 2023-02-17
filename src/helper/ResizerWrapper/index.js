import React, { useEffect } from "react";

const ResizeWrapper = (props) => {
  const { children } = props;

  const onResize = () => {
    console.log(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
        window.removeEventListener('resize', onResize);
    }
  }, []);
  return children;
};

export default ResizeWrapper;
