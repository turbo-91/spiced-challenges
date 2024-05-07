import "./App.css";
import Avatar from "./Avatar";
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
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
