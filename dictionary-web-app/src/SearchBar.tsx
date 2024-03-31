import { debounce } from "lodash";
import SearchIcon from "./assets/images/icon-search.svg";
export default function SearchBar({ onProps, font }) {
  const debouncedOnProps = debounce(onProps, 600);
  return (
    <div className="bg-searchBarBgColor dark:bg-darkThemeSearchBarBgColor flex justify-between px-6 py-3 rounded-2xl">
      <input
        type="text"
        id="search-bar"
        placeholder="Search"
        className={`bg-searchBarBgColor dark:bg-darkThemeSearchBarBgColor text-[1rem] text-textColor dark:text-darkThemeTextColor font-bold w-full outline-secondaryColor font-${font}`}
        onChange={(e) => debouncedOnProps(e.target.value)}
      />
      <img src={SearchIcon} alt="" />
    </div>
  );
}
