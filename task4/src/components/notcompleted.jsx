import React, { Component } from 'react';

class NotCompleted extends Component {
    render() {
        return (
            <ol className="notCompleted">
                <h3>Tasks to be Performed</h3>

                {this.props.tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => this.props.deleteTask(index, false)}><i className="fa fa-trash"></i></button>
                    <button onClick={() => this.props.completeTask(index)}><i className="fa fa-check"></i></button>
                </li>
                ))}
            </ol>
        )
    }
}

export default NotCompleted;