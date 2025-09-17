import { useState } from "react";

export default function GuessInput({disabled, onGuess}){

  const[value, setValue] =  useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    onGuess(value);
    setValue("");
  }

  return(
    <form onSubmit={handleSubmit} className="guess-form">
     <input type="number" placeholder="Enter your Guess" value={value} onChange={(e) => setValue(e.target.value)} disabled = {disabled}/>
     <button type="submit" disabled={disabled}>Guess</button>
    </form>
  );
}