import React from 'react';
import {inject} from 'mobx-react'

@inject("todos")
class AddTodo extends React.Component{
    render(){
        return (
            <form method="POST" onSubmit={(e) => this.addNewTodo(e)}>
                <input type="text"  ref={(input) => this.todoInput=input}/>
                <button type="submit" >Add</button>
            </form>
        )
    }
    addNewTodo = (e) => {
        e.preventDefault();
        this.props.todos.addTodo(this.todoInput.value)
    }
}
export default AddTodo;