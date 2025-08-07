import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           { CORE_CONCEPTS.map((concept) => {
             return <CoreConcept key={concept.title} title={concept.title} image={concept.image} description={concept.description} />
            })
          }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
