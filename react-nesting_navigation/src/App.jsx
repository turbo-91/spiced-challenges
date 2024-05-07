import "./App.css";

import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";
import Header from "./Header";
import Navigation from "./Navigation";
import Link from "./Link";

export default function App() {
  return (
    <>
      <Header>
        {" "}
        <Link href={"#"}>
          <img className="round-image" src={logo} alt="logo" />
        </Link>
        <Navigation>
          {" "}
          <Link className="navigation__link" href={"#home"}>
            Home
          </Link>
          <Link className="navigation__link" href={"#about"}>
            About
          </Link>
          <Link className="navigation__link" href={"#impressum"}>
            Impressum
          </Link>
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
