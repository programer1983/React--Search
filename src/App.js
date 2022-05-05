
import './App.css';
import {useState, useRef} from "react"

const users = [
  {id: "1", name: "Bill"},
  {id: "2", name: "Kelly"},
  {id: "3", name: "Harry"},
]

function App() {
  const [activeUsers, setActiveUsers] = useState(users)
  const inputRef = useRef(null)

  const onSearchClick = () => {
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(inputRef.current.value.toLowerCase()))
    setActiveUsers(filteredUsers)
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button type="button" onClick={onSearchClick}>Search</button>
      <ul>
        {activeUsers.map((user) => {
          return (
            <li>{user.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
