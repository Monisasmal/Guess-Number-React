import React, { useCallback, useState } from 'react'
import { generateRandomNumber } from '../utils/generateRandomNumber'

const useGuessGame = (min = 1, max= 100) => {

const[target, setTarget] = useState(() => generateRandomNumber(min,max));
const[message, setMessage] = useState("");
const[attempts, setAttempts] = useState(0);
const[status, setStatus] = useState("playing");


const restart = useCallback(()=>{
  setTarget(generateRandomNumber(min,max));
  setMessage("");
  setAttempts(0);
  setStatus("playing");
},[min,max]);

const guessNumber = useCallback((value) =>{
  if(status === 'won') return;
  const userGuess = Number(value);

  if(!userGuess || Number.isNaN(userGuess)){
    setMessage("Please Enter a  Valid Number");
    return;
  }
  setAttempts((prev) => prev+1);

if(userGuess === target){
  setStatus("won");
  setMessage(`🎉 Correct! The number was ${target}.`)
}else if(userGuess>target){
setMessage("Too High! Try again.");
}else{
  setMessage("Too Low! Try again.");
}

},[status,target]
)

  return {message, attempts, status, guessNumber, restart}
}

export default useGuessGame