import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect} from 'react'

function App() {
  const get = async ()=>{
    let data = await axios.get("http://localhost:4000/contact");
    console.log(data.data)
  }
  useEffect(()=>{
    get();
  })
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
