import SearchIcon from "./assets/images/icon-search.svg";
export default function SearchBar() {
  return (
    <div className="bg-searchBarBgColor flex justify-between px-6 py-3 rounded-2xl">
      <input
        type="text"
        id="search-bar"
        placeholder="Search"
        className="bg-searchBarBgColor text-[1rem] text-textColor font-bold"
      />
      <img src={SearchIcon} alt="" />
    </div>
  );
}
