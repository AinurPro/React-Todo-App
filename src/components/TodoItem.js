const TodoItem = (props) => {
    const {name, createdAt} = props.todo
    return (
        <div>
            <h3>{name}</h3>
            <h2>{createdAt}</h2>
        
           
        </div>
       
    )
}

export default TodoItem