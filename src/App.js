
import './App.css';
import {useState, useRef} from "react"

const users = [
  {id: 1, name: "Bill"},
  {id: 2, name: "Kelly"},
  {id: 3, name: "Harry"},
]

function App() {


  return (
    <div className="App">
      <input type="text" />
      <button type="button">Search</button>
      <ul>
        {users.map((user) => {
          return (
            <li>{user.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
