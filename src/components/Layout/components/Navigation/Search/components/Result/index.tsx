import { Link } from 'gatsby';
import { IArticleMetaData } from '@templates/Article/types';
import * as cn from './Result.module.scss';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

export interface ResultProps extends IArticleMetaData {
	selected: boolean;
}

const Result = ({
	title,
	link,
	tags,
	summary,
	selected = false,
}: ResultProps) => {
	const resultRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		if (selected && resultRef?.current) resultRef.current.scrollIntoView({behavior: "smooth", block: "center"});
	}, [selected]);

	return (
		<Link
			className={clsx(cn.container, selected && cn.selected)}
			ref={resultRef}
			to={'/' + link.join('/')}
		>
			<h3 className={cn.title}>{title}</h3>
			<p className={cn.summary}>{summary}</p>
			<div className={cn.tags}>
				{tags.map(tag => (
					<div key={tag} className={cn.tag}>
						{tag}
					</div>
				))}
			</div>
		</Link>
	);
};

const NoResultsFound = () => (
	<div className={cn.container}>
		<h3 className={cn.title}>No Results Found</h3>
	</div>
);

export { Result, NoResultsFound };
