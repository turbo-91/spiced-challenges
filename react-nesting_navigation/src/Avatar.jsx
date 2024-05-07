import Image from "./Image.jsx";
import avatar from "./assets/avatar.jpg";

export default function Avatar() {
  function OnClick() {
    console.log("I could toggle a profile!");
  }
  return (
    <button type={"button"} onClick={OnClick} aria-label={"toggle profile"}>
      <Image src={avatar} alt={"avatar"} />
    </button>
  );
}
