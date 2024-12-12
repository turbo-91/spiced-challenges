import "./App.css";

export default function App() {
  return <Sum valueA={1} valueB={1} />;
}

const Sum = ({ valueA, valueB }) => {
  let valueC = valueA + valueB;
  return (
    <p>
      {valueA} + {valueB} = {valueC}
    </p>
  );
};
