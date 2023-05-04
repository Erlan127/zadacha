import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
let planetName = "erlan";
let currentVisitorName = "erlan";

let name = "Ilya";

useEffect(() => {

  alert(` hello ${planetName} `);  //hello
  
  alert("hello " + name ); // hello name
  
  alert(` hello ${name} `); // hello Ilya
  
  let greeting = prompt("Как вас зовут?", "");
  alert(`Привет, ${greeting}!`);
}, [])


// let a = 1, b = 1;

// let c = ++a; // c = 2, a = 2
// let d = b++; // d = 1, b = 2

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true

// if ("0") {
//   alert( 'Привет' );
// }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
