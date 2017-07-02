import React from 'react';
import {observer,inject} from 'mobx-react';

@inject("todos")
@observer
class ListTodo extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.todoList.map((t) => (<li key={t.id} onClick={t.toggleCompleted.bind(t)} className={t.isCompleted?"completed":"inprogress"}>{t.task}</li>))}
            </div>
        )
    }
}
export default ListTodo;