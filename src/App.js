import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Greet1 from './components/Greet1'
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Article title="React"><p>React is a Javacript library to create UI...</p></Article>
      </header>
    </div>
  );
}

export default App;
