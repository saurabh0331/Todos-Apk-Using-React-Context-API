import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"


function TodoItems({todo}) {

   
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
      
  const editTodo = () =>{
      updateTodo(todo.id , {...todo , todo : todoMsg})
      setIsTodoEditable(false)
  }

  const togglecompleted = () => {
     toggleComplete(todo.id)
  }

  return (
    <div className="flex justify-center">
       <input type="checkbox" 
        checked = {todo.completed}
        onChange={togglecompleted}
        className="border-[1px] h-[40px] w-[350px] mt-[50px] border-red-800"
       />


      <input type="text" 
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className="border-[1px] h-[40px] w-[350px] mt-[50px] border-red-800"
       />
       <button onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed} className="ml-[10px] mt-[50px] h-[40px] w-[150px] border-[2px] border-indigo-500 text-[20px]">Edit</button>
       <button onClick={() => deleteTodo(todo.id)} className="ml-[10px] mt-[50px] h-[40px] w-[150px] border-[2px] border-indigo-500 text-[20px]">Delete</button>
    </div>
  )
}

export default TodoItems
