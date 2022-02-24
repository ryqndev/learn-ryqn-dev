import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import cn from './Home.module.scss';

const Home = () => {
    useEffect(() => {document.title = 'Learn'}, []);
    return (
        <div className={cn.container}>
            <Link to='/articles'>
                <button className={cn.explore}>EXPLORE</button>
            </Link>
        </div>
    );
}

export default Home;
