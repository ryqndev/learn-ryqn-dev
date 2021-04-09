import {useEffect, useContext, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import AuthUserContext from '../contexts/AuthUserContext';

const useAuth = () => {
    const history = useHistory();
    const [authUser, setAuthUser] = useContext(AuthUserContext);

    useEffect(() => {
        if(!authUser) history.push('/login');
    }, [authUser, history]);

    const logout = useCallback(() => {
        localStorage.removeItem('user');
        setAuthUser(null);
    }, [setAuthUser]);

    return {
        authUser: authUser,
        setAuthUser: setAuthUser,
        logout: logout,
    };
}

export default useAuth;
