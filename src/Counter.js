import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  // toggle false showing start timer

  useEffect(() => {
    let interval = null;
    if (!toggle) {
      // <- if toggle is not false
      interval = setInterval(() => {
        console.log("setInterval is running");
        setCount((prevStateCount) => prevStateCount + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [toggle]);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <div>Counter: {count}</div>

      {toggle ? (
        <button onClick={handleToggle}>Start Timer</button>
      ) : (
        <button onClick={handleToggle}>Pause Timer</button>
      )}
    </>
  );
}
