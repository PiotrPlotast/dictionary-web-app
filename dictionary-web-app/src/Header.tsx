import Navbar from "./Navbar";
export default function Header({
  font,
  setFont,
}: {
  font: string;
  setFont: (font: string) => void;
}) {
  return (
    <header>
      <Navbar font={font} setFont={setFont} />
    </header>
  );
}
