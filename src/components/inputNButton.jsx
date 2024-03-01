import { useEffect, useState } from "react";
import React from "react";
// A component that contains a text input
//  and a button to submit the guessed letter.
//  If the letter submitted has already been guessed, display an alert().

function InputNButton({word, allGuessedLetters, setAllGuessedLetters}) {
  const [userInput, setUserInput] = useState("");

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  
  //see if letter input is in word
  function handleInputinWord() {
    if (word.includes(userInput)) {
    // change _ to userInput letter

    }
    // insert userInput letter into allGuessedLetters []
    setAllGuessedLetters([...allGuessedLetters, userInput]);
    //set input field to blank after they click button
    setUserInput("");
  }

  return (
    <React.Fragment>
      <input type="text" onChange={handleInputChange} value={userInput} />
      <button onClick={handleInputinWord}>Guess This Letter</button>
    </React.Fragment>
  );
}

export default InputNButton;
