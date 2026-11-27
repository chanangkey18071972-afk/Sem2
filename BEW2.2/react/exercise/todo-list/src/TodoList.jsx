import TodoItem from "./TodoItem";

export default function TodoList({ todoList, toggleIsCompletedFromTodoList, deleteTodoFromTodoList }) {
    return (
        <ul className="list-group">
            {todoList.map((task, index) => (
                <TodoItem key={index} {...task} toggleIsCompletedFromTodoItem={toggleIsCompletedFromTodoList} deleteTodoFromTodoItem={deleteTodoFromTodoList} />
            ))}
        </ul>
    );
}
