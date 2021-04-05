import {useState} from 'react';
import './Add.css';

function Add(){
    const [steps, setSteps] = useState([]);
    const uploadRecipe = () => {

    }

    return (
        <form className="add-form">
            <h2>Upload Recipe</h2>
            <input placeholder="Recipe Name" id="name" type="text" />
            {/* <input placeholder="Description" id="name" type="text" /> */}
            <input placeholder="name" id="name" type="text" />
            <h3>Steps:</h3>
            {steps.map((step, index) => (
                <StepInput {...step}/>
            ))}
            <button className="login" onClick={uploadRecipe}>⇀</button>
        </form>
    );
}

function StepInput(){
    return (
        <textarea />
    );
}

export default Add;
