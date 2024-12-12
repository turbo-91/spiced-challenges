import ColoredNumber from "./ColoredNumber";
import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  let [counterValue, setCounterValue] = useState(0);
  function onClickAdd() {
    setCounterValue(counterValue++);
  }
  function onClickSubtract() {
    setCounterValue(counterValue--);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counterValue} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={onClickAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={onClickSubtract}
        >
          -
        </button>
      </div>
    </div>
  );
}
