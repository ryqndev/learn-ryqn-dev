import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TagsList } from '../../components';
import articles from '../../assets/articlesData.json';

const ArticlesList = () => {
	useEffect(() => {
		document.title = 'Articles';
	}, []);
	return (
		<div className='article-list--wrapper page__component'>
			<main>
				<h1>Articles List</h1>
				<div className='list'>
					{articles.map(article => (
						<ArticleCard key={article.link} {...article} />
					))}
				</div>
			</main>
		</div>
	);
};

const ArticleCard = ({ link, title, content, tags, date }) => {
	return (
		<Link to={link} className='item'>
			<h2>{title}</h2>
			<span className='date'>
				{new Date(date.updated).toDateString().substr(4)}
			</span>
			<p>{content}</p>
			<TagsList tags={tags} />
		</Link>
	);
};

export default ArticlesList;