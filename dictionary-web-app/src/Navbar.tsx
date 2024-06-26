import Logo from "../src/assets/images/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import FontPicker from "./FontPicker";
export default function Navbar({
  font,
  setFont,
}: {
  font: string;
  setFont: (font: string) => void;
}) {
  return (
    <nav className="flex justify-between items-center py-4 md:pt-[3.75rem] md:pb-14">
      <a href="#">
        <img
          src={Logo}
          alt=""
          aria-label="Link to main page"
          className="h-8 md:h-9"
        />
      </a>
      <div className="flex items-center space-x-4">
        <FontPicker font={font} setFont={setFont} />
        <div className="h-8 w-[1px] bg-decorationColor"></div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
