import TodoForm from "./components/TodoForm"
import TodoItems from "./components/TodoItems"
import { TodoProvider } from "./contexts/TodoContext"
import { useEffect, useState } from "react"

function App() {

  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) =>{
     setTodos((prev)=> [{id : Date.now() , ...todo} , ...prev])
  }

  const updateTodo = (id , todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)) )
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id  ? {...prevTodo , completed : !prevTodo.completed} : prevTodo)))
  }


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  } , [])

  useEffect(()=>{
      localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])



  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete
    }}>
    <div className="flex  flex-col items-center h-screen w-full">
      <TodoForm />
      

      {/* <div className="flex justify-center">
        <TodoItems todos = {todos}/>
      </div> */}

      {
        todos.map((todo)=> (
           <div key={todo.id}>
             <TodoItems todo={todo}/>
           </div>
        ))

      }
    </div>
    </TodoProvider>
  )
}

export default App
