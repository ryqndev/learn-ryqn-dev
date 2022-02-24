import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import useDatabase from '../../controller/hooks/useDatabase.js';
import './Add.css';

function Add(){
    const [steps, setSteps] = useState(['']);
    const [ingredients, setIngredients] = useState(['']);
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
    const handleChange = (setFunction, index) => event => {
        event.preventDefault();
        setFunction(prevState => {
            let newState = [...prevState];
            newState[index] = event.target.value;
            return newState;
        })
    }

    return (
        <form className="add-form" onSubmit={getFormInputAndUpload}>
            <h2>Upload Recipe</h2>
            <input type="file" name="image" accept="image/png, image/jpeg"/>
            <input placeholder="Recipe Name" id="name" type="text" required />
            <input placeholder="Prep Time" id="prep-time" type="text" required />
            <textarea placeholder="Description" id="description" rows={5} />
            <h3>Ingredients:</h3>
            {ingredients.map((ingredient, index) => {
                return (
                    <input 
                        placeholder={"Ingredient #" + (index + 1)}
                        type="text"
                        key={index}
                        required
                        value={ingredient}
                        onChange={handleChange(setIngredients, index)}
                    />);
            }
            )}
            <button type="button" onClick={() => {setIngredients([...ingredients, ''])}}>+</button>
            <h3>Steps:</h3>
            <ol>
            {steps.map((step, index) => (
                <li key={index}>
                    <textarea placeholder={"Step #" + (index + 1)} cols={1} value={step} onChange={handleChange(setSteps, index)}/>
                </li>
            ))}
            </ol>
            <button id="step-add" type="button" onClick={() => {setSteps([...steps, ''])}}>+</button>
            <button className="upload" type="submit">⇀</button>
        </form>
    );
}

export default Add;
