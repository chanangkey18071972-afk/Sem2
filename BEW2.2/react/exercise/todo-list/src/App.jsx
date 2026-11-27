import { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
function App() {
    const [todos, setTodos] = useState([]);
    const [initialLoad, setInitialLoad] = useState(true);

    console.log("Test");

    const toggleIsCompleted = (clickedId) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === clickedId ? { ...todo, isCompleted: !todo.isCompleted } : todo;
            }),
        );
    };

    const deleteTodo = (clickedId) => {
        setTodos(
            todos.filter((todo) => {
                return todo.id !== clickedId;
            }),
        );
    };

    // Step 7
    const addNewTodo = (newTodo) => {
        let newId;
        if (todos.length == 0) {
            newId = 101;
        } else {
            newId = todos[todos.length - 1].id + 1;
        }
        const newTodoWithId = { id: newId, ...newTodo };
        console.log(newTodoWithId);
        setTodos([...todos, newTodoWithId]);
        console.log(todos);
    };

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        const todosArray = JSON.parse(savedTodos);
        setTodos(todosArray);
        console.log("empty useEffect");
    }, []);

    useEffect(() => {
        if (initialLoad) {
            setInitialLoad(false);
            return;
        }
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("todos useEffect");
    }, [todos]);

    return (
        <div
            className="card rounded shadow-sm"
            style={{
                maxWidth: "500px",
                margin: "60px auto",
                background: "#000000",
            }}
        >
            <div className="card-body">
                <h3 className="card-title mb-3">My Todo List</h3>
                <TodoList todoList={todos} toggleIsCompletedFromTodoList={toggleIsCompleted} deleteTodoFromTodoList={deleteTodo} />
                {/*         Step 5        Step 6 */}
                <AddTodoForm addNewTodo={addNewTodo} />
                {/* <button onClick={addTodo}>Add todo</button> */}
            </div>
        </div>
    );
}

export default App;
