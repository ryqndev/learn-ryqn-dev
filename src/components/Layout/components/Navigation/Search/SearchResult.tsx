import { Link } from 'gatsby';
import { IArticleMetaData } from '@templates/Article/types';
import * as cn from './Search.module.scss';

const SearchResult = ({ title, link, tags, summary }: IArticleMetaData) => {
	return (
		<Link className={cn.link} to={`/article${link}`}>
			<div className={cn.title}>{title}</div>
			<div className={cn.summary}>{summary}</div>
			<div className={cn.tags}>
				{tags.map(tag => (
					<div className={cn.tag}>{tag}</div>
				))}
			</div>
		</Link>
	);
};

export { SearchResult };
