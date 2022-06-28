

import todosData from './data/TodosData'
import {Component} from "react"

import Navbar from './components/Navbar'
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {

  state= {
    todosData: todosData,
    todosName: '',
    createdAt: '',
    inCompleted: 'false'
  }

  handleChange = (event)=> {
    console.log(event.target.value)
    this.setState({[event.target.id] : event.target.value})
  }

render() {
  return (
    <div className="App">
      <Navbar />
      <form>
        <label htmlFor="todoName">Todo Name</label>
        <input type="text" value={this.state.todoName} onChange={this.handleChange} id="todoName"/>

        <label htmlFor="createdAt">createdAt</label>
        <input type="date" value={this.state.createdAt} onChange={this.handleChange} id="createdAt"/>
      </form>
      <todosData />
      <TodoList todos={todosData}/>
    </div>
     );
}
}

export default App;
