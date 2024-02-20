import { useEffect, useState } from "react";

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    async function getTodos(){
      const res = await fetch("/api/todos");
      const todos = await res.json();
      
      setTodos(todos);
    }
    getTodos();
  },[])
  return (
    <main className="container">
      <h1>My Todo List:</h1>
     {(todos.length > 0) && <pre>{JSON.stringify(todos, null, 2)}</pre>}
    </main>
  ); 
}

