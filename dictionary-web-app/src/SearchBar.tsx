import { debounce } from "lodash";
import SearchIcon from "./assets/images/icon-search.svg";
export default function SearchBar({ onProps }) {
  const debouncedOnProps = debounce(onProps, 600);
  return (
    <div className="bg-searchBarBgColor flex justify-between px-6 py-3 rounded-2xl">
      <input
        type="text"
        id="search-bar"
        placeholder="Search"
        className="bg-searchBarBgColor text-[1rem] text-textColor font-bold w-full outline-secondaryColor"
        onChange={(e) => debouncedOnProps(e.target.value)}
      />
      <img src={SearchIcon} alt="" />
    </div>
  );
}
