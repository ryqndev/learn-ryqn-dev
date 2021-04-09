import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './Home.css';
import useAuth from '../../controller/hooks/useAuth';

function Home(){
    const {authUser, logout} = useAuth();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if(authUser === null) return;
        const {username, _token} = authUser;
        const url = `${process.env.REACT_APP_SERVER_ENDPOINT}/recipes/?user=${username}&_token=${_token}`;

        fetch(url)
        .then(function(response){
            if(response.status === 401) logout();
            return response.json();
        }).then(function(parsedResponse){
            if(parsedResponse.success){
                setRecipes(parsedResponse.recipes);
            }
        });    
    }, [authUser, logout]);

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
