import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
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
