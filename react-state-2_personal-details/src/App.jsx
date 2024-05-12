import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";

export default function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  function handleCreateUser({ name, email }) {
    setName(name), setEmail(email);
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleCreateUser={handleCreateUser}
      />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{setName}</span>
      </p>
      <p>
        Email: <span className="output">{setEmail}</span>
      </p>
    </div>
  );
}
