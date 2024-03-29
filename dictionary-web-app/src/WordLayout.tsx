import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ActiveWord from "./ActiveWord";
import WordExplanation from "./WordExplanation";

export default function WordLayout() {
  const [word, setWord] = useState([]);
  const [searchedWord, setSearchedWord] = useState("hello");

  const handlePropsFromSearch = (data) => {
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

  const activeWord = word[0]?.word;
  const spelling = word[0]?.phonetics[0]?.text;
  const audio = word[0]?.phonetics.find((phonetic) => phonetic.audio)?.audio;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <SearchBar onProps={handlePropsFromSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ActiveWord
            activeWord={activeWord}
            spelling={spelling}
            audio={audio}
          />
          <WordExplanation word={word} setSearchedWord={setSearchedWord} />
        </>
      )}
    </div>
  );
}
