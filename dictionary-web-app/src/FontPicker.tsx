export default function FontPicker({
  font,
  setFont,
}: {
  font: string;
  setFont: (font: string) => void;
}) {
  return (
    <>
      <select
        id="font-picker"
        className={`dark:bg-darkThemeBgColor dark:text-darkThemeTextColor font-${font} font-bold text-bodyS md:text-bodyM`}
        onChange={(e) => {
          setFont(e.target.value);
        }}
      >
        <option value="inter">Sans Serif</option>
        <option value="lora">Serif</option>
        <option value="inconsolata">Mono</option>
      </select>
    </>
  );
}
