import "./App.css";

import avatar from "./assets/avatar.jpg";
import Header from "./Header";
import Navigation from "./Navigation";
import Link from "./Link";
import Logo from "./Logo";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href={"#home"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#impressum"}>Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>

      <main>content goes here…</main>
    </>
  );
}
