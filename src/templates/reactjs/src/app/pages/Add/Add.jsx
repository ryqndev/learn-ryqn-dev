import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import useDatabase from '../../controller/hooks/useDatabase.js';
import './Add.css';

function Add(){
    const [steps, setSteps] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const {uploadRecipe} = useDatabase();
    const history = useHistory();

    async function getFormInputAndUpload(event){
        event.preventDefault();
        let recipeData = {
            prepTime: document.getElementById('prep-time').value,
            name: document.getElementById('name').value,
            ingredients: ingredients,
            steps: steps,
            image: '',
            description: document.getElementById('description').value,
        }
        let uploadResult = await uploadRecipe(recipeData);
        history.push('/recipe/' + uploadResult.id);
    }

    return (
        <form className="add-form" onSubmit={getFormInputAndUpload}>
            <h2>Upload Recipe</h2>
            <input placeholder="Recipe Name" id="name" type="text" />
            {/* <input placeholder="Description" id="name" type="text" /> */}
            <input placeholder="Prep Time" id="prep-time" type="text" />
            <textarea placeholder="Description" id="description" />
            <h3>Steps:</h3>
            {steps.map((step, index) => (
                <StepInput {...step}/>
            ))}
            <button className="upload">⇀</button>
        </form>
    );
}

function StepInput(){
    return (
        <textarea />
    );
}

export default Add;
