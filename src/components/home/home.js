import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='container home-component'>
            <div className='home-title'>
                <h1>Logo - consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
                    natus
                    eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos
                    cupiditate dolore doloribus! Ad dolore dignissimos asperiores dicta facere optio quod commodi
                    nam
                    tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos
                    facere sequi unde optio aliquam, consectetur adipisicing elit.</p>
            </div>
            <div className='hot-links'>
                <Link to='/about' className='hot-links-item'>Learn more</Link>
                <Link to='/todo-app' className='hot-links-item'>Check our Todo App</Link>
            </div>
        </div>
    )
}

export default Home;
