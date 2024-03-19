import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Greet1 from './components/Greet1'
import Article from './components/Article'
import WelcomeVisitor from './components/WelcomeVisitor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeVisitor />
      </header>
    </div>
  );
}

export default App;
