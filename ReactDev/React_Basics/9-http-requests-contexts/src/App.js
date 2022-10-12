import './App.css';
import ParentLvl1 from './components/ParentLvl1';
import { UserContextProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider value='{"userFullName":"Makarand Patil","userName":"Mac21"}' >
        <ParentLvl1 />    
      </UserContextProvider>
    </div>
  );
}

export default App;
