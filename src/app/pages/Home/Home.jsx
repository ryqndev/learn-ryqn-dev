import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home--wrapper">
            <Link to='/articles'>
                <button className="cta--btn">EXPLORE</button>
            </Link>
        </div>
    );
}

export default Home;