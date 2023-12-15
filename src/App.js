import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let todo = document.getElementById("todo-Add").value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
    } else {
      alert("Enter a valid task");
    }
  };
  return (
    <div className="">
      <div id="todo-list" className="w-500px m-60px">
        <h1 className="text-center font-serif text-blue-600 text-3xl bg-gray-600 ">
          Todo List
        </h1>
        <form onSubmit={handleSubmit} id="todo-Add">
          <div className="flex flex-col items-center mt-6 ">
          <input type="text" class="border border-gray-400 rounded p-2 w-[400px] transition-all duration-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none" id='todo-Add'/>

            <button type="submit" className="bg-blue-900 text-white border  rounded-md mt-5 p-2 hover:bg-blue-200 ">Add Todo</button>
          </div>
        </form>
        {todos.map((todo) => {

        })}
      </div>
    </div>
  );
}
