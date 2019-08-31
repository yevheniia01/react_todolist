import React, { Component } from 'react';
import PropTypes from "prop-types";
//mport { white } from 'ansi-colors';


export class TodoItem extends Component {
    // markComplete = (e) => {
    //  console.log(this.props)
    // }
    render() {
        const {id, title }= this.props.todo;
        return (
            <div style={{ backgroundColor: 'lightgray' }}>
                <p>
                    <input type="checkbox" 
                    onChange ={this.props.markComplete.bind (this, this.props.todo.id)} /> {' '}
                   { title }
                   <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >x</button>
                
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}
const btnStyle={
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "2px 5px",
    //borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
