import Link from "./Link.jsx";
import Image from "./Image.jsx";
import logo from "./assets/logo.jpg";

export default function Logo() {
  return (
    <Link href={"#"}>
      <Image src={logo} alt={"logo"} />
    </Link>
  );
}
