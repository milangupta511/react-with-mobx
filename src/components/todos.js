import React from 'react';
import AddTodo from './addTodo';
import ListTodo from './listTodo';

class Todos extends React.Component {
    render(){
        return (
            <div>
                <AddTodo />
                <ListTodo />
            </div>
        )
    }
}
export default Todos