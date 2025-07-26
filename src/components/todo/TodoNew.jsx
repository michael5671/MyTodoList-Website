const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    // addNewTodo("giaphu") // fire
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log("handleOnChange", name);
    }
    return (
        <div className="todo-new" >
            <input type="text"
                onChange={ (event) => handleOnChange(event.target.value)}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;