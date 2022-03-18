import React from "react";
import {Navigate} from "react-router-dom";

import "./login.css";

const Login = ({isLoggedIn, onLogin}) => {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    if (isLoggedIn) {
        return <Navigate to='/todo-app'/>
    } else {
        return (
            <div className='container'>
                <div className='login-form d-flex'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input required type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={value} onChange={handleChange} required type="password"
                                   className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <button disabled={!value} type="submit" className="btn btn-primary submit-button"
                                onClick={onLogin}>Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login;