import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
    return (
        <ul className="list-group">
            {todoList.map((task, index) => (
                <TodoItem key={index} {...task} />
            ))}
        </ul>
    );
}
