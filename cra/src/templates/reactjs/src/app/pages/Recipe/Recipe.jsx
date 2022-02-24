import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import useDatabase from '../../controller/hooks/useDatabase.js';
import InstructionDisplay from './InstructionDisplay';
import './Recipe.css';

function Recipe(){
    const {getRecipe} = useDatabase();
    const {id} = useParams();
    const [recipeData, setRecipeData] = useState(null);

    useEffect(() => {
        (async() => setRecipeData( await getRecipe(id) ))();
    }, [id, getRecipe]);

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
