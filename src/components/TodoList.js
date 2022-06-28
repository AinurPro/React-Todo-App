import TodoItem from './TodoItem'

const TodosList = (props) => {
    console.log(props.todos)
    return (
        <div>
            <h2>Todos</h2>
            {props.todos.map(item => <TodoItem todo={item}/>)}
        </div>
    )
}
export default TodosList