import Card from "./components/Card";
import "./App.css";

export default function App() {
  const pinaColada = [
    { id: 1, name: "🍍 pineapple", color: "yellow" },
    { id: 2, name: "🥥 coconut", color: "brown" },
    { id: 3, name: "🍒 maraschino cherry", color: "red" },
  ];

  return (
    <ul className="app">
      {pinaColada.map((ingredient) => (
        <Card
          key={ingredient.id}
          name={ingredient.name}
          color={ingredient.color}
        />
      ))}
    </ul>
  );
}
