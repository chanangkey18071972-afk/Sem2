export default function TodoItem({ id, label, isCompleted, toggleIsCompletedFromTodoItem, deleteTodoFromTodoItem }) {
    const handleCheckboxClick = () => {
        toggleIsCompletedFromTodoItem(id);
    };

    const handleDeleteClick = () => {
        deleteTodoFromTodoItem(id);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <button onClick={handleCheckboxClick} className={`btn btn-sm btn-${isCompleted ? "success" : "light"}`}>
                    <i className={`bi bi${isCompleted ? "-check" : ""}-square`}></i>
                </button>
                <span className={`ms-2 ${isCompleted ? "text-decoration-line-through" : ""}`}>{label}</span>
            </div>
            <div>
                <button onClick={handleDeleteClick} className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}
