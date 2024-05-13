import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import { initialEntries } from "./components/EntriesSection";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ date: date, id: uid(), ...newEntry }, ...entries]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm setEntries={setEntries} onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
