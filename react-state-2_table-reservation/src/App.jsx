import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);
  function handleAdd() {
    return setPeople(people + 1);
  }
  function handleSubtract() {
    return setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onClickAdd={handleAdd} onClickSubtract={handleSubtract} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
