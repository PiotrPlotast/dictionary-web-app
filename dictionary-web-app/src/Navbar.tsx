import Logo from "../src/assets/images/logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import FontPicker from "./FontPicker";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <a href="#">
        <img src={Logo} alt="" aria-label="Link to main page" className="h-8" />
      </a>
      <div>
        <FontPicker />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
