import logo from './logo.svg';
import './App.css';
import { Hello } from './Component/Hello';
import { Counter,Counter2 } from './Component/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <Hello name="Luan" age="9"></Hello>
       <Counter></Counter>
       <Counter></Counter>
       <Counter></Counter>
       <Counter2 name="Son"></Counter2>

   
        
      </header>
    </div>
  );
}

export default App;
