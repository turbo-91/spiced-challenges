import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";

function App({ entries }) {
  const [initialEntries, setEntries] = useState(initialEntries);
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection entries={setEntries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
