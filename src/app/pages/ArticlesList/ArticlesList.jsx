import {Link} from 'react-router-dom';
import {TagsList} from '../../components';
import articlesData from '../../assets/articlesData.json';

const ArticlesList = () => {
    return (
        <div className="article-list--wrapper">
            <main>
                <h1>Articles List</h1>
                <div className="list">
                    {articlesData.map(articleData => <ArticleCard key={articleData.link} {...articleData}/>)}
                </div>
            </main>
        </div>
    );
}

const ArticleCard = ({link, title, content, tags, date}) => {
    return (
        <Link to={link} className="item">
            <h2>{title}</h2>
            <span className="date">{new Date(date.updated).toDateString().substr(4)}</span>
            <p>{content}</p>
            <TagsList tags={tags} />
        </Link>
    );
}

export default ArticlesList;
