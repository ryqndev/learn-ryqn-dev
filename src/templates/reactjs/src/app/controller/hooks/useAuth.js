import {useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AuthUserContext from '../contexts/AuthUserContext';

const useAuth = () => {
    const history = useHistory();
    const [authUser, setAuthUser] = useContext(AuthUserContext);

    useEffect(() => {
        if(!authUser) history.push('/login');
    }, [authUser, history]);

    const logout = () => {
        localStorage.removeItem('user');
        setAuthUser(null);
    }

    return {
        authUser: authUser,
        setAuthUser: setAuthUser,
        logout: logout,
    };
}

export default useAuth;
