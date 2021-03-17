import {Link} from 'react-router-dom';
import {useEffect} from 'react';

const Home = () => {
    useEffect(() => {document.title = 'Learn'}, []);
    return (
        <div className="home--wrapper">
            <Link to='/articles'>
                <button className="cta--btn">EXPLORE</button>
            </Link>
        </div>
    );
}

export default Home;