const TodoData = (props) => {
    //props là một object {}
    // {
    //     name: "phu",
    //     age: 25, 
    //     data: {}
    // }
    const { name, age, data } = props;

    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    console.log(">>check props: ", props);

    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning react</div>
            <div>Watching youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;