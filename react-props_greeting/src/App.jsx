import "./App.css";

export default function App() {
  return <Greeting />;
}

const Greeting = ({ name }) => {
  if ((name = "Gimena")) return <p>Hello, Coach!</p>;
  return <p>Hello, {name}!</p>;
};
