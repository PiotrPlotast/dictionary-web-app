export default function FontPicker({ font, setFont }) {
  return (
    <>
      <select
        id="font-picker"
        className={`dark:bg-darkThemeBgColor dark:text-darkThemeTextColor font-${font}`}
        onChange={(e) => setFont(e.target.value)}
      >
        <option value="inter">Sans Serif</option>
        <option value="lora">Serif</option>
        <option value="inconsolata">Mono</option>
      </select>
    </>
  );
}
