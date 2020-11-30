import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Container">
          <div className="Inner-container">
          <form>
            <input 
              type="text" 
              id="adress" 
              placeholder="Street address" 
            />
            <input 
              type="text" 
              id="City" 
              placeholder="City" 
            />
            <input 
              type="text" 
              id="City" 
              placeholder="Province" 
            />
            <input 
              type="text" 
              id="postal" 
              placeholder="Postal Code" 
            />
            <input 
              type="text" 
              id="Country" 
              placeholder="Country" 
            />
            <button className="btn" type="submit">Go!</button>
            </form>
          </div>
      </div>  
      </header>
    </div>
  );
}

export default App;
