import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Essential', 'Basic', 'Important'];

function getRandomDescription() {
  const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
  return reactDescriptions[randomIndex];
}
function Header(){
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

function CoreConcept(props){
  return (
    <li>  
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>  
    </li>

)}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           { CORE_CONCEPTS.map((concept) => {
             return <CoreConcept title={concept.title} image={concept.image} description={concept.description} />
            })
          }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
