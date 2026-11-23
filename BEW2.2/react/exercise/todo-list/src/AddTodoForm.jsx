import { useState } from "react";

// Step 4 -> jump back to App.jsx
export default function AddTodoForm({ addNewTodo }) {
    const [newTodo, setNewTodo] = useState("");

    // Step 2
    const handleAddButtonClick = (e) => {
        e.preventDefault();
        const newTodoObject = {
            label: newTodo,
            isCompleted: false,
        };
        // Step 3
        addNewTodo(newTodoObject);
    };
    return (
        <div className="mt-4">
            <form className="d-flex justify-content-between align-items-center">
                <input type="text" className="form-control" placeholder="Add new item..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} required />
                <button
                    className="btn btn-primary btn-sm rounded ms-2"
                    onClick={handleAddButtonClick} // Step 1
                >
                    Add
                </button>
            </form>
        </div>
    );
}
