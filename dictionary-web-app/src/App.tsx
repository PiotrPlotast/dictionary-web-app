import "./App.css";
import Header from "./Header";
import WordLayout from "./WordLayout";
import { useState } from "react";
function App() {
  const [font, setFont] = useState("inter");
  return (
    <div className="px-6 dark:bg-darkThemeBgColor">
      <Header font={font} setFont={setFont} />
      <WordLayout font={font} />
    </div>
  );
}

export default App;
