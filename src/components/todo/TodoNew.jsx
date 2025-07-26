const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    // addNewTodo("giaphu");

    return (
        <div className="todo-new" >
            <input type="text"></input>
            <button >Add</button>
        </div>
    )
}

export default TodoNew;