import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home--wrapper">
            <Link to='/making-a-theme-switcher' className="cta--btn">EXPLORE</Link>
        </div>
    );
}

export default Home;