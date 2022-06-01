import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
//import MyComp from './components/Greet';        --> Can be imported as any tag name
import { Welcome } from './components/Greet';
import GreetClass from './components/Greet_ClassComp'

function App() {
  return (
    <div className="App">  
      <Greet></Greet>
      <Welcome/>
      <GreetClass/>
    </div>
  );
}

export default App;
