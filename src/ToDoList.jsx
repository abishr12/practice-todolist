import React, {Component} from 'react';
import ToDoItems from './ToDoItems';

class ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      newTask: ''
    }

    this.handleChange = this
      .handleChange
      .bind(this);

    this.addItem = this
      .addItem
      .bind(this);

    this.deleteItem = this
      .deleteItem
      .bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  deleteItem(key) {
    let {tasks} = this.state
    const filteredItems = tasks.filter(task => task.key !== key)

    this.setState({tasks: filteredItems})

  }
  addItem(event) {
    event.preventDefault();
    
    let newTask = this.a.value

    let newTaskObj = {
      key: Date.now(),
      task: newTask
    };

    this.setState(prevState => ({
      tasks: prevState
        .tasks
        .concat(newTaskObj),
      newTask: ''
    }));

  }

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            onChange={this.handleChange}
            name='newTask'
            ref={node => this.a = node}
            className="form-control"
            placeholder='Enter Task Here'/>
          <button className="btn btn-success">Add Task</button>
        </form>
        <ToDoItems deleteItem={this.deleteItem} entries={this.state.tasks}/>
      </div>
    )
  }
}

export default ToDoList;