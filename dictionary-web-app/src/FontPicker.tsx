export default function FontPicker() {
  return (
    <>
      <select
        id="font-picker"
        className="dark:bg-darkThemeBgColor dark:text-darkThemeTextColor"
      >
        <option value="SansSerif">Sans Serif</option>
        <option value="Serif">Serif</option>
        <option value="Mono">Mono</option>
      </select>
    </>
  );
}
