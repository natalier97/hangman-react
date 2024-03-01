// puzzle word (letters should be separated by spaces).
// Letters that haven't been guessed should be displayed as an underscore -
// letters that have been guessed should be displayed.

import { useEffect, useState } from "react";

function PuzzleWord({ word, allGuessedLetters }) {
  const [underScoreWord, setUnderScoreWord] = useState("");
 

  //SETTING UNDERSCORD WORD
  useEffect(() => { 
    let length = word.length;
    let tempUnderscoreWord = "";
    for (let i = 1; i <= length; i++) {
      tempUnderscoreWord += "_ ";
    }
    setUnderScoreWord(tempUnderscoreWord);
  }, [word]);

  //helper funct to replace underscores w/ letters
  function replaceChar(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  //checking to see if allGuessedLetters has changed
  useEffect(() => {
    let lastLetter = allGuessedLetters[allGuessedLetters.length - 1];
    if (word.includes(lastLetter)) {
      //finding all instances of letter in the word
      let arr = [];
      for (let i = 0; i < word.length; i++) {
        if (word[i] === lastLetter) {
          arr.push(i);
        }
      }
      //replacing underscores in Underscoreword with correct letters
      let tempUnderscoreWord = underScoreWord;
      for (let i of arr) {
        let letterIndex = i * 2;
        tempUnderscoreWord = replaceChar(
          tempUnderscoreWord,
          letterIndex,
          lastLetter
        );
      }
      setUnderScoreWord(tempUnderscoreWord);
    }
  }, [allGuessedLetters]);

  //ALERT FOR WINNING
  useEffect(() => {
    if (underScoreWord.length > 0) {
      if (!underScoreWord.includes("_")) {
        alert("YOU WIN!!");
        window.location.reload();
      };
    };
  }, [underScoreWord]);

  return (
    <div id='underscoreDiv'>
      
      {underScoreWord}
    </div>
  );
}

export default PuzzleWord;

