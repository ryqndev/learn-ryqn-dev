import {useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AuthUserContext from '../contexts/AuthUserContext';

const useLogin = () => {
    const history = useHistory();
    const [authUser, setAuthUser] = useContext(AuthUserContext);

    useEffect(() => {
        if(authUser) history.push('/');
    }, [authUser, history]);

    const login = (data) => {
        fetch(process.env.REACT_APP_SERVER_ENDPOINT + '/login', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function(response){
            return response.json();
        }).then(function(parsedResponse){
            if(parsedResponse?.success){
                localStorage.setItem('user', JSON.stringify(parsedResponse));
                setAuthUser(parsedResponse);
            }else{
                alert(parsedResponse?.message);
            }
        });
    }

    const signup = (data) => {
        fetch(process.env.REACT_APP_SERVER_ENDPOINT + '/signup ', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function(response){
            return response.json();
        }).then(function(parsedResponse){
            if(parsedResponse?.success){
                localStorage.setItem('user', JSON.stringify(parsedResponse));
                setAuthUser(parsedResponse);
            }else{
                alert(parsedResponse?.message);
            }
        });
    }

    return {
        authUser: authUser,
        setAuthUser: setAuthUser,
        login: login,
        signup: signup,
    };
}

export default useLogin;
