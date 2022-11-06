import './App.css';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person 
        last_name={"Doe"}
        first_name={"Jane"}
        age={ 45 }
        hair_color={"Black"}
      />
      <Person 
        last_name={"Smith"}
        first_name={"John"}
        age={ 88 }
        hair_color={"Brown"}
      />
      <Person 
        last_name={"Fillmore"}
        first_name={"Millard"}
        age={ 50 }
        hair_color={"Brown"}
      />
      <Person 
        last_name={"Smith"}
        first_name={"Maria"}
        age={ 62 }
        hair_color={"Brown"}
      />
    </div>
  );
}

export default App;
