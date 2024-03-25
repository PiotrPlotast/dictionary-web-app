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
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
      .then((response) => {
        setWord(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchedWord]);

  const activeWord = word[0]?.word;
  const spelling = word[0]?.phonetics[0]?.text;
  const audio = word[0]?.phonetics[0]?.audio;

  return (
    <div className="mx-6">
      <SearchBar onProps={handlePropsFromSearch} />
      <ActiveWord activeWord={activeWord} spelling={spelling} audio={audio} />
      <WordExplanation word={word} />
    </div>
  );
}
