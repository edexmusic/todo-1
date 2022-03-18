import "./todo.css";
import {Component} from "react";
import AddTodo from "./todo-components/add-todo/add-todo";
import TodoList from "./todo-components/todo-list/todo-list";

import "./todo.css";
import {Navigate} from "react-router-dom";

export default class Todo extends Component {


    render() {

        const {isLoggedIn} = this.props;

        if (isLoggedIn) {
            return (
                <div className='container todo-component'>
                    <div>
                        <TodoList todos={this.props.todos} onDeleted={this.props.onDeleted}
                                  onToggleDone={this.props.onToggleDone}/>
                        <AddTodo onAdd={this.props.onAdd}/>
                    </div>
                </div>
            )
        } else {
            return <Navigate to='/login'/>
        }
    }
}