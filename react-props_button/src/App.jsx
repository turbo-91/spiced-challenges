import "./App.css";

export default function App() {
  function handleClick() {
    return console.log("You clicked me!");
  }
  return (
    <Button
      color="green"
      onClick={handleClick()}
      disabled={false}
      text={"hey, bitch!"}
    />
  );
}

const Button = ({ color, disabled, text, onClick }) => {
  return (
    <button disabled={disabled} style={{ color: color }} onClick={onClick}>
      {text}
    </button>
  );
};
