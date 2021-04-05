import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import useAuth from '../../controller/hooks/useAuth';
import InstructionDisplay from './InstructionDisplay';
import './Recipe.css';

function Recipe(){
    const {authUser} = useAuth();
    const {id} = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        if(authUser === null) return;
        const {username, _token} = authUser;
        const url = `${process.env.REACT_APP_SERVER_ENDPOINT}/recipe/${id}?user=${username}&_token=${_token}`;

        // ex: http://localhost:5000/recipe/thai-tea?user=ryan&_token=x8gj7wecs4
        fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(parsedResponse){
            if(parsedResponse.success){
                setRecipeData(parsedResponse);
            }else{
                // if()
            }
        });
    }, [id, authUser]);

    if(recipeData === null) return (<h1 className="loading">Loading...</h1>);

    return (
        <div>
            <article>
                <img src={recipeData.image} alt={recipeData.name}/>
                <h1>{recipeData.name}</h1>
                <p>{recipeData.description}</p>
                <InstructionDisplay instructions={recipeData.steps}/>
            </article>
        </div>
    )
}

export default Recipe;
