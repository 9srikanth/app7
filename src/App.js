import logo from './logo.svg';
import './App.css';
import Computer from './Computer';
import Mouse from './Mouse';
import Keyboard from './Keyboard';
import { Splender,Suziki,Royalefield, Duke, } from './Bikes';

function App() {
  return (
    <div className="App">
    <Splender/>
    <Suziki/>
    <Royalefield/>
    <Duke/>
    </div>
  );
}

export default App;
