import "./App.css";
import Header from "./Header";
import WordLayout from "./WordLayout";
import { useState } from "react";
function App() {
  const [font, setFont] = useState("inter");
  console.log(font);
  return (
    <div className="px-6 dark:bg-darkThemeBgColor md:px-10 ">
      <div className="md:max-w-3xl md:mx-auto">
        <Header font={font} setFont={setFont} />
        <WordLayout font={font} />
        <span className="font-inter"></span>
        <span className="font-lora"></span>
        <span className="font-inconsolata"></span>
      </div>
    </div>
  );
}

export default App;
