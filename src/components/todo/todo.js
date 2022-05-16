import "./todo.css";
import {Component} from "react";
import AddTodo from "./todo-components/add-todo/add-todo";
import TodoList from "./todo-components/todo-list/todo-list";

import "./todo.css";
import {Redirect} from "@reach/router";
import {Router} from "@reach/router";
export default class Todo extends Component {
    maxId = 0;

    state = {
        todoData: [
            this.createTodoItem('Lorem ipsum dolor sit amet'),
            this.createTodoItem('Ad dolore dignissimos asperiores dicta facere optio'),
            this.createTodoItem('Rerum sed nulla eum vero'),
            this.createTodoItem('Qui dicta minus molestiae'),
            this.createTodoItem('Ratione temporibus aperiam harum'),
        ],
        term: '',
        isLoggedIn: false
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: ++this.maxId
        }
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];

        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    render() {
        const {isLoggedIn, todoData} = this.state;

        if (!isLoggedIn) {
            return (
                <div className='container todo-component'>
                    <div>
                        <TodoList todos={todoData} onDeleted={this.deleteItem}
                                  onToggleDone={this.onToggleDone}/>
                        <AddTodo onAdd={this.addItem}/>
                    </div>
                </div>
            )
        } else {
            return (
                    <Redirect to='/login'/>
            )

        }
    }
}