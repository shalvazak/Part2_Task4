import './App.css';

import React, { Component } from 'react';
import NotCompleted from './components/notcompleted';
import Completed from './components/completed';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
      newTask: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    if (this.state.newTask.trim() === '') {
      return;
    }

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, this.state.newTask],
      newTask: '',
    }));
  };

  completeTask = (index) => {
    const completedTask = this.state.tasks[index];

    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
      completedTasks: [...prevState.completedTasks, completedTask],
    }));
  };

  deleteTask = (index, isCompletedTask) => {
    if (isCompletedTask) {
      this.setState((prevState) => ({
        completedTasks: prevState.completedTasks.filter((_, i) => i !== index),
      }));
    } else {
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((_, i) => i !== index),
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="addTask">
          <input type="text" value={this.state.newTask} onChange={this.handleChange} />
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <NotCompleted tasks = {this.state.tasks} completeTask={this.completeTask} deleteTask={this.deleteTask}/>
        <Completed completedTasks={this.state.completedTasks} deleteTask={this.deleteTask}/>
        
      </div>
    );
  }
}

export default TodoApp;
