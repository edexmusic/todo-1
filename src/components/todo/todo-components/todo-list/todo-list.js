import TodoListItem from "../todo-list-item/todo-list-item";

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)}
                          onToggleDone={() => onToggleDone(id)}/>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};


export default TodoList;