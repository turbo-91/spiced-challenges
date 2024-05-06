import "./App.css";

export default function App() {
  return (
    <main>
      <Button>click me once</Button>
      <Button>click me twice</Button>
      <Button>I won't let you click me twice.</Button>
      <Button>Oh no, I won't let you click me twice, no.</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
