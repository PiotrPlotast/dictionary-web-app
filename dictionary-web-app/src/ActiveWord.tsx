import playBtnImg from "./assets/images/icon-play.svg";
export default function ActiveWord({
  activeWord,
  spelling,
  audio,
}: {
  activeWord: string;
  spelling: string;
  audio: string;
}) {
  function playWordSound() {
    const sound = new Audio(audio);
    console.log(audio);
    sound.play();
  }
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex flex-col gap-2">
        <h1 className=" text-[2rem] font-bold text-textColor">{activeWord}</h1>
        <h2 className=" text-secondaryColor text-bodyM">{spelling}</h2>
      </div>
      <button onClick={playWordSound} className="w-12 h-12">
        <img src={playBtnImg} alt="" />
      </button>
    </div>
  );
}
