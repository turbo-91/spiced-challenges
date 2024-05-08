import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./main";
import { Entries } from "./components/Entries";
import { Form } from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Main>
        <Form />
        <Entries />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
