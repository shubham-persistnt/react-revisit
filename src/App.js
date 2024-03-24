import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Greet1 from './components/Greet1'
import Article from './components/Article'
import WelcomeVisitor from './components/WelcomeVisitor'
import Counter from './components/Counter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Greet1 name="Shubham" age="30" />
      </header>
    </div>
  );
}

export default App;
