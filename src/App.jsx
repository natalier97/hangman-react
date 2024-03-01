import { useEffect, useState } from 'react'
import './App.css'
import jsonData from './data/words.json'
import PuzzleWord from './components/puzzleWord'
import InputNButton from './components/inputNButton'
import WrongLetters from './components/WrongLetters'

function App() {

  const [word, setWord] = useState('')
  const [allGuessedLetters, setAllGuessedLetters] = useState([])

useEffect(() => {
let randNum = Math.floor(Math.random() * jsonData.length)
setWord(jsonData[randNum])
}, []);
 



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

export default App
