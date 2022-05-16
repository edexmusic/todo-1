import "./header.css"
import {Link} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {getLatestData} from "../../containers/redux/actions/actionCreator";

const Header = () => {
    const dispatch = useDispatch();
    const dataHandler = () => {
        dispatch(getLatestData())
    };
    return (
        <div className='container'>
            <div className='header d-flex container'>
                <Link to='/' className='header-logo'>Logo</Link>
                <ul className='header-list'>
                    <li className='header-list-item'>
                        <Link to='/' className='btn btn-primary'>
                            Home
                        </Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to='/about' className='btn btn-primary'>
                            About us
                        </Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to='/todo-app' className='btn btn-primary'>
                            Todo App
                        </Link>
                    </li>
                    <li className='header-list-item'>
                        <Link to='/login' className='btn btn-dark'>
                            Login
                        </Link>
                    </li>
                    <button className='hot-links-item' onClick={dataHandler}>Get Data</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;