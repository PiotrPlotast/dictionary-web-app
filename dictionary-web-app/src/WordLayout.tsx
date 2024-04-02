import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ActiveWord from "./ActiveWord";
import WordExplanation from "./WordExplanation";

export default function WordLayout({ font }: { font: string }) {
  const [word, setWord] = useState([]);
  const [searchedWord, setSearchedWord] = useState("keyboard");
  const handlePropsFromSearch = (data: SetStateAction<string>) => {
    setSearchedWord(data);
  };
  //get word from api
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
      .then((response) => {
        setWord(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [searchedWord]);

  const activeWord = (word[0] as { word: string })?.word;
  const spelling = (word[0] as { phonetics: { text: string }[] })?.phonetics[0]
    ?.text;
  const audio = (word[0] as { phonetics: { audio: string }[] })?.phonetics.find(
    (phonetic) => phonetic.audio
  )?.audio;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <SearchBar onProps={handlePropsFromSearch} font={font} />
      {isLoading ? (
        <p className={`font-${font}`}>Loading...</p>
      ) : (
        <>
          <ActiveWord
            activeWord={activeWord}
            spelling={spelling}
            audio={audio ?? ""}
            font={font}
          />
          <WordExplanation
            word={word}
            font={font}
            setSearchedWord={setSearchedWord}
          />
        </>
      )}
    </div>
  );
}
