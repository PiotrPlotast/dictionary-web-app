import playBtnImg from "./assets/images/icon-play.svg";
export default function ActiveWord({
  activeWord,
  spelling,
  audio,
  font,
}: {
  activeWord: string;
  spelling: string;
  audio: string;
  font: string;
}) {
  function playWordSound() {
    const sound = new Audio(audio);
    console.log(audio);
    sound.play();
  }
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex flex-col gap-2">
        <h1
          className={`text-[2rem] font-bold text-textColor dark:text-darkThemeTextColor font-${font}`}
        >
          {activeWord}
        </h1>
        <h2 className={`text-secondaryColor text-bodyM font-${font}`}>
          {spelling}
        </h2>
      </div>
      <button onClick={playWordSound} className="w-12 h-12">
        <img src={playBtnImg} alt="" />
      </button>
    </div>
  );
}
