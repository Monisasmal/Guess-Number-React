import './App.css';
import useGuessGame from './hooks/useGuessGame';
import GuessInput from './components/GuessInput';
import Feedback from './components/Feedback';
import Stats from './components/Stats';
import Controls from './components/Controls';



export default function App(){
  const {message, attempts, status, guessNumber, restart} = useGuessGame(1,100);

  return(
    <div className="container">
      <h1>Guess the Number</h1>
      <GuessInput disabled={status === 'won'} onGuess={guessNumber}/>
      <Feedback message={message}/>
      <Stats attempts={attempts}/>
      <Controls onRestart={restart}/>
    </div>
  )
}