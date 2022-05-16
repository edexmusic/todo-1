import "./home.css";
import {Link} from "@reach/router";
import {useDispatch, useSelector} from "react-redux";
import {getLatestData} from "../../containers/redux/actions/actionCreator";
import {Router} from "@reach/router";

const Home = (data) => {
    const lastData = useSelector(store => store?.data.latestData)
    if (!lastData) {
        return null;
    }
    return (

        <div className='container home-component'>
            <h2>{lastData.date}</h2>
            <div className='home-title'>
                <h1>{lastData.author}</h1>
                <p>{lastData.slides[0].title}</p>
                <p>{lastData.slides[1].title}</p>
                <p>{lastData.title}</p>
            </div>
            <div className='hot-links'>
                    <Link to='/about' className='hot-links-item'>Learn more</Link>
                    <Link to='/todo-app' className='hot-links-item'>Check our Todo App</Link>
            </div>
        </div>

    )
}

export default Home;
