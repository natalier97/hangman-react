import { useEffect, useState } from "react";
import "./App.css";
import jsonData from "./data/words.json";
import PuzzleWord from "./components/puzzleWord";
import InputNButton from "./components/inputNButton";
import WrongLetters from "./components/WrongLetters";
import axios from "axios";

function App() {
  const [word, setWord] = useState("");
  const [allGuessedLetters, setAllGuessedLetters] = useState([]);

  // useEffect(() => {
  //   let randNum = Math.floor(Math.random() * jsonData.length);
  //   setWord(jsonData[randNum]);
  // }, []);


  //using useEffect to set Word
  useEffect(() => {
    //using axios to get word from API
    async function getWord() {
      let data = await axios.get("https://random-word-api.herokuapp.com/word");
      let apiWord = data.data[0];
      setWord(apiWord);
    }
    getWord()
  }, []);
  console.log(`this is the word:  ${word}`);

  return (
    <>
      <InputNButton
        word={word}
        allGuessedLetters={allGuessedLetters}
        setAllGuessedLetters={setAllGuessedLetters}
      />
      <PuzzleWord word={word} allGuessedLetters={allGuessedLetters} />

      <WrongLetters word={word} allGuessedLetters={allGuessedLetters} />
    </>
  );
}

export default App;
