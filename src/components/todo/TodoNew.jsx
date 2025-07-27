import { useState } from "react";

const TodoNew = (props) => {

    // const valueInput = "giaphu";
    const [valueInput, setValueInput] = useState("giaphu");

    const { addNewTodo } = props;

    // addNewTodo("giaphu") // fire
    const handleClick = () => {
        console.log("check valueInut: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new" >
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            ></input>
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;