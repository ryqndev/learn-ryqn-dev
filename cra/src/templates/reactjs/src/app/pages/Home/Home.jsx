import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './Home.css';
import useDatabase from '../../controller/hooks/useDatabase';

function Home(){
    const {getRecipeFeed} = useDatabase();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        (async() => setRecipes( await getRecipeFeed() ))();
    }, [getRecipeFeed]);

    return (
        <main>
            <h1>Newest Recipes</h1>
            {recipes.map(recipeData => (
                <RecipeCard {...recipeData} key={recipeData.id}/>
            ))}
        </main>
    );
}

function RecipeCard({name, id, description, prepTime, image}){
    return (
        <Link to={`/recipe/${id}`} className="recipe-card">
            <img src={image} alt={name}/>
            <div>
                <h2>{name}</h2>
                <span>~ {prepTime}</span>
                <p>{description.substring(0, 200) + '...'}</p>
            </div>
        </Link>
    );
}

export default Home;
