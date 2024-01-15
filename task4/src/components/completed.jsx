import React, { Component } from 'react';

class Completed extends Component {
    render() {
        return (
            <ol className="Completed">
                <h3>Completed Works</h3>
                {this.props.completedTasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => this.props.deleteTask(index, true)}><i className="fa fa-trash"></i></button>
                </li>
                ))}
            </ol>
        )
    }
}

export default Completed;