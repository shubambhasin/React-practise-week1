import { useState } from "react";

const Counter = () => {
  const [timer, setTimer] = useState(0);

  const add = () => {
    return setTimer((timer) => timer + 1);
  };
  const sub = () => {
    return setTimer((timer) => timer - 1);
  };

  return (
    <div>
      <button onClick={sub}> - </button>
      <span> {timer} </span>
      <button onClick={add}> + </button>
    </div>
  );
};

export default Counter;
