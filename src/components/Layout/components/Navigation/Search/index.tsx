import { useEffect, useMemo, useState } from 'react';
import articles from '@content/article/Articles.json';
import tutorials from '@content/tutorial/Tutorials.json';
import * as cn from './Search.module.scss';
import SearchIcon from './search.svg';
import Fuse from 'fuse.js';
import { SearchResult } from './SearchResult';
import { IArticleMetaData } from '@templates/Article/types';

const content = [...articles, ...tutorials];

const Search = () => {
	const [results, setResults] = useState<IArticleMetaData[]>([]);
	const [query, setQuery] = useState('');

	const fuse = useMemo(
		() =>
			new Fuse(content, {
				isCaseSensitive: false,
				shouldSort: true,
				threshold: 0.3,
				keys: ['title', 'summary', 'tags'],
			}),
		[articles]
	);

	useEffect(() => {
		if (!query.length) return setResults(content);

		setResults(fuse.search(query).map(res => res.item));
	}, [fuse, query]);

	return (
		<div className={cn.container}>
			<input
				id='search'
				className={cn.input}
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder='Search...'
			/>
			<SearchIcon className={cn.icon} viewBox='0 0 48 48' />
			<div className={cn.results} tabIndex={0}>
				<div className={cn.overflow}>
					{results.map(article => (
						<SearchResult key={article.link.join('/')} {...article} />
					))}
					{!results.length && <div>No results found</div>}
				</div>
			</div>
		</div>
	);
};

export { Search };
