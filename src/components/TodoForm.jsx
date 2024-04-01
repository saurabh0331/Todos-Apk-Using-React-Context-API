import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"


function TodoForm() {

 const [todo , setTodo] = useState("")

 const {addTodo} = useTodo()

 const add = (e) =>{
    e.preventDefault()

    if(!todo) return ;

    addTodo({ todo , completed : false})
    setTodo("")
 } 

  return (
    <div className="flex  flex-col ">
       <form onSubmit={add}>
        <input type="text"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
         className=" mr-[10px] mt-[50px] border-[1px] h-[45px] w-[500px] border-indigo-900"/>
        <button type="submit" className="ml-[10px] mt-[50px] h-[45px] w-[150px] border-[2px] border-indigo-500 text-[20px]">Add</button>
       </form>
    </div>
  )
}

export default TodoForm
