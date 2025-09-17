export default function Feedback({message}){
  return message ? <p className="feedback">{message}</p>:null;
}