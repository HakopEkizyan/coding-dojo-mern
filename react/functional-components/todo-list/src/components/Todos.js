const Todo = (props) => {
    const todoClasses = ["bold", "italic"];

    if (props.todo.complete) {
        todoClasses.push("line");
    }

    return (
    <div>
        <input 
            onChange={(event) => {
                props.handleComplete(props.i);
            }}
            checked={props.todo.complete}
            type="checkbox"
        />
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <button
            onClick={(event) => {
                props.handleDelete(props.i);
            }}>
            Delete
        </button>
    </div>
    );
}

export default Todo;