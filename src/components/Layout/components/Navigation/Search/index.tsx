import { useEffect, useMemo, useState } from 'react';
import articles from '@content/article/Articles.json';
import tutorials from '@content/tutorial/Tutorials.json';
import * as cn from './Search.module.scss';
import SearchIcon from './search.svg';
import Fuse from 'fuse.js';
import {
	NoResultsFound,
	Result as SearchResult,
	Tooltip as SearchTooltip,
} from './components';
import { IArticleMetaData } from '@templates/Article/types';
import { useKeyboard } from './controllers/useKeyboard';

const content = [...articles, ...tutorials];

const Search = () => {
	const [results, setResults] = useState<IArticleMetaData[]>([]);
	const [query, setQuery] = useState('');
	const { selected } = useKeyboard(results);

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
			<div className={cn.backdrop}></div>
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
				<SearchTooltip />
				<div className={cn.overflow}>
					{results.map((article, idx) => (
						<SearchResult
							key={article.link.join('/')}
							selected={idx === selected}
							{...article}
						/>
					))}
					{!results.length && <NoResultsFound />}
				</div>
			</div>
		</div>
	);
};

export { Search };
