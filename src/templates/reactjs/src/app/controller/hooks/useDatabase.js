import {useCallback} from 'react';
import useAuth from './useAuth';

const useDatabase = () => {
    const {authUser, logout} = useAuth();
    const {username, _token} = authUser;
    const URLAuthQuery = `?user=${username}&_token=${_token}`;

    const getDataFromServer = useCallback(async(endpoint, defaultValue) => {
        if(authUser === null) return defaultValue;
        let response = await fetch(process.env.REACT_APP_SERVER_ENDPOINT + endpoint + URLAuthQuery);

        if(response.status === 401) logout();

        let parsedResponse = await response.json();
        return parsedResponse.success ? parsedResponse : defaultValue;
    }, [authUser, logout, URLAuthQuery]);

    const getRecipeFeed = useCallback(async () => {
        return await getDataFromServer('/recipes', []);
    }, [getDataFromServer]);

    const getRecipe = useCallback(async (id) => {
        return await getDataFromServer('/recipe/' + id, []);
    }, [getDataFromServer]);

    const uploadRecipe = useCallback(async (recipeData) => {
        if(authUser === null) return null;
        let response = await fetch(process.env.REACT_APP_SERVER_ENDPOINT + '/upload' + URLAuthQuery, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData),
        });

        if(response.status === 401) logout();

        let parsedResponse = await response.json();
        return parsedResponse;
    }, [authUser, logout, URLAuthQuery]);

    return {
        getRecipe,
        getRecipeFeed,
        uploadRecipe,
    };
}

export default useDatabase;
