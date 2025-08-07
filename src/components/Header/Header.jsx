import reactImg from '../../assets/react-core-concepts.png';
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential', 'Basic', 'Important'];

export function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
  return reactDescriptions[randomIndex];
}
export default function Header(){
  const description = getRandomDescription();
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      <ul>

      </ul>
    </header> 
  )
}