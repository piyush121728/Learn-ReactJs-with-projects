import { useState, useEffect } from 'react'
import { TodoContextProvider } from './contexts'
// import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((prevTodoTodo) => (prevTodoTodo.id === id ? todo : prevTodoTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((prevTodoTodo) =>
        prevTodoTodo.id === id ? { ...prevTodoTodo, completed: !prevTodoTodo.completed } : prevTodoTodo
      )
    )
  }

  //get data from local storage after the refresh is completed
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])



  //transfer the data into local storage when user refresh the page
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  setTimeout(()=>{
    const p = document.querySelector("#sologan");
    p.setAttribute('class','italic text-center mb-8  text-zinc-900')
    
    p.innerHTML = `<q>Action is the foundational key to all success.</q> ~ Pablo Picasso`;


  },2000)


  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8 bg-[url('https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg')] bg-cover">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className=" text-2xl font-bold text-center mb-2 mt-2 text-black">Manage Your Todos</h1>
          <p id='sologan' ></p>
          
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
