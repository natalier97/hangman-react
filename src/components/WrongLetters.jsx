// A component that displays letters that are NOT PART of the puzzle word.

import React from "react";
import { useEffect, useState } from "react";

function WrongLetters({ word, allGuessedLetters }) {
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    let lastLetter = allGuessedLetters[allGuessedLetters.length - 1];
    if (!word.includes(lastLetter)) {
      setWrongLetters([...wrongLetters, lastLetter]);
    }
  }, [allGuessedLetters]);

  //alert & page reload for game over (6 wrong guesses)
  useEffect(() => {
    if (wrongLetters.length > 6) {
      alert("GAME OVER!");
      window.location.reload();
    }
  }, [wrongLetters]);

  return (
    <React.Fragment>
      <div>Wrong Letters: {wrongLetters}</div>
    </React.Fragment>
  );
}

export default WrongLetters;
