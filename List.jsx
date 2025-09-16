export default function todolist1() {
  const name = "Sille";
  
  return (
    <>
      <h1>Remember {name}:</h1>
      <ul>
        <li>Buy bread</li>
        <li>Buy milk</li>
        <input 
          type="text" 
          placeholder="Add a new task" 
        />
        <button onClick={handleAdd}>Add</button>
      </ul>
    </>
  )
}
