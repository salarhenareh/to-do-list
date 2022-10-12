import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodoHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodos = { ...todos[index] };
    selectedTodos.isCompleted = !selectedTodos.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodos;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodos = { ...todos[index] };
    selectedTodos.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodos;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;

      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const selectHandler = (e)=>{
    setSelectedOption(e);
    filterTodos(e.value)
  }

  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onComplete2={completeTodoHandler}
        onDelete2={deleteHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
