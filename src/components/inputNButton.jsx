import { useEffect, useState } from "react";
import React from "react";
// A component that contains a text input
//  and a button to submit the guessed letter.
//  If the letter submitted has already been guessed, display an alert().

function InputNButton({word, allGuessedLetters, setAllGuessedLetters}) {
  const [userInput, setUserInput] = useState("");

  function handleInputChange(event) {
    setUserInput(event.target.value.toLowerCase());
  }


  //adding userInput into allGuessedLetters
  function handleInputinWord() {
    //alert if user already guessed letter before
    if (allGuessedLetters.includes(userInput)) {
    alert('You have already guessed this letter!')
    setUserInput('')
    return
    }
    // insert userInput letter into allGuessedLetters []
    setAllGuessedLetters([...allGuessedLetters, userInput]);
    //set input field to blank after they click button
    setUserInput("");
  }

  return (
    <React.Fragment>
      <input type="text" onChange={handleInputChange} value={userInput} maxLength='1' />
      <button onClick={handleInputinWord}>Guess This Letter</button>
    </React.Fragment>
  );
}

export default InputNButton;
