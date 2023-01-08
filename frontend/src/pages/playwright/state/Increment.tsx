import {useState} from "react";

export const Increment = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <p>Counter: <span id="counter">{count}</span></p>
      <button id="increment" onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}