import {Component} from "react";

import "./add-todo.css";

export default class AddTodo extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        })
    }


    render() {
        return (
            <div>
                <form className='add-form d-flex' onSubmit={this.onSubmit}>
                    <input required type="text"
                           placeholder='Type here your Todo'
                           className='form-control search-input'
                           onChange={this.onLabelChange}
                           value={this.state.label}/>
                    <button className='btn btn-primary add-button'> Add Todo</button>
                </form>
            </div>
        )
    }
}







