import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Greet1 from './components/Greet1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        <Greet1 name="Shubham" age="30" />
        <Greet1 name="Tushar" age="35" />
        <Greet1 name="Clark" age="40" />
      </header>
    </div>
  );
}

export default App;
