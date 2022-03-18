import "./header.css"
import {Link} from "react-router-dom";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;