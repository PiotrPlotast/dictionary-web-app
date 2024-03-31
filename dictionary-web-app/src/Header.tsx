import Navbar from "./Navbar";
export default function Header({ font, setFont }) {
  return (
    <header>
      <Navbar font={font} setFont={setFont} />
    </header>
  );
}
