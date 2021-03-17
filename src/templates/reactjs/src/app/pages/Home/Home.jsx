import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Home.css';

const Home = ({authToken, setAuthToken}) => {
    const history = useHistory();
    const [recipes, setRecipes] = useState([]);

    const logout = () => {
        localStorage.removeItem('_token');
        setAuthToken(null);
    }

    useEffect(() => {
        if(!authToken) history.push('/login');
    }, [authToken, history]);

    return (
        <div>
            <nav>
                <button className="logout" onClick={logout}>LOGOUT</button>
            </nav>
            <main>
                
            </main>
        </div>
    )
}

export default Home;
