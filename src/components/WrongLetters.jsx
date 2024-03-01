// A component that displays letters that are NOT PART of the puzzle word.

import React from "react";
import { useEffect, useState } from "react";
// import {} from '../data'

function WrongLetters({ word, allGuessedLetters }) {
  const [wrongLetters, setWrongLetters] = useState([]);
  const [picture, setPicture] = useState("src/data/0.JPG");

  useEffect(() => {
    let lastLetter = allGuessedLetters[allGuessedLetters.length - 1];
    if (!word.includes(lastLetter)) {
      setWrongLetters([...wrongLetters, lastLetter]);
    }
  }, [allGuessedLetters]);

  //alert & page reload for game over (6 wrong guesses)
  useEffect(() => {
    setPicture(`src/data/${wrongLetters.length - 1}.JPG`);
    
    if (wrongLetters.length > 6) {
      setTimeout(() => {

        alert("GAME OVER!");

        window.location.reload();
      }, 500);
    }
  }, [wrongLetters]);

  return (
    <React.Fragment>
      <div id="wrong-letter-header">Wrong Letters: </div>
      <div id="wrong-letter-div">{wrongLetters}</div>
      <div>
        <img src={picture} height="200px" width="200px" id="picture" />
      </div>
    </React.Fragment>
  );
}

export default WrongLetters;
