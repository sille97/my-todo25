import { useState } from 'react'
import './App.css'
import List from './Components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To Do List</h1>
      <List />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
