import React, { Component } from 'react';
import PropTypes from "prop-types";


export class TodoItem extends Component {
    markComplete = (e) => {
     console.log(this.props)
    }
    render() {
        return (
            <div style={{ backgroundColor: 'lightgray' }}>
                <p>
                    <input type="checkbox" onChange ={this.markComplete} /> {' '}
                   {this.props.todo.title}
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default TodoItem
