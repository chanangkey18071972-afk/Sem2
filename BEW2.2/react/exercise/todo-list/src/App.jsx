import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
function App() {
    const [todos, setTodos] = useState([
        {
            label: "Task 1",
            isCompleted: true,
        },
        {
            label: "Task 2",
            isCompleted: false,
        },
        {
            label: "Task 3",
            isCompleted: false,
        },
    ]);

    const addTodo = () => {
        const sampleNewTodo = {
            label: "Task 4",
            isCompleted: false,
        };
        setTodos([...todos, sampleNewTodo]);
    };

    // Step 7
    const addNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

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
                <TodoList todoList={todos} />
                {/*         Step 5        Step 6 */}
                <AddTodoForm addNewTodo={addNewTodo} />
                {/* <button onClick={addTodo}>Add todo</button> */}
            </div>
        </div>
    );
}

export default App;
