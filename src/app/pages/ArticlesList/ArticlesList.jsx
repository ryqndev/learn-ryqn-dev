import {Link} from 'react-router-dom';
import {TagsList} from '../../components';

const MakingAThemeSwitcher = {
    link: "/making-a-theme-switcher",
    title: "Making a dark / light mode theme switcher",
    content: "Learn how to setup a theme toggler with just CSS and Javascript. We'll be using CSS variables and utilizing Javascript functions to swap out styles. Then, we'll use Local Storage to save the theme and load it in future use.",
    tags: ["HTML", "CSS", "JS", "CSS Variables", "LocalStorage", "UI", "frontend", "web developement"],
}
const SetupFlask = {
    link: "/starting-out-with-flask",
    title: "Starting out with Flask",
    content: "Explore the Flask framework for Python and understand when we should use it. Then, we'll run our own Flask app in under 8 lines of code. Finally, we'll take look at the various use cases of Flask and you can decide which way you would prefer to use it.",
    tags: ["Python", "Flask", "backend", "server", "web developement"],
}


const ArticlesList = () => {
    return (
        <div className="article-list--wrapper">
            <main>
                <h1>Articles List</h1>
                <div className="list">
                    <ArticleCard {...SetupFlask}/>
                    <ArticleCard {...MakingAThemeSwitcher}/>
                </div>
            </main>
        </div>
    );
}

const ArticleCard = ({link, title, content, tags}) => {
    return (
        <Link to={link} className="item">
            <h2>{title}</h2>
            <p>{content}</p>
            <TagsList tags={tags} />
        </Link>
    );
}

export default ArticlesList;
