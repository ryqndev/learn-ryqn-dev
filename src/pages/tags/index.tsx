import { Layout } from '@components';
import { memo } from 'react';
import * as cn from './Tags.module.scss';
import articles from '@content/article/Articles.json';
import tutorials from '@content/tutorial/Tutorials.json';

export interface TagCount {
	[tag: string]: number;
}

const tags = [...articles, ...tutorials].reduce((acc, el): TagCount => {
	const itemTags = el.tags;
	itemTags.forEach(tag => {
		if (Object.hasOwn(acc, tag)) {
			acc[tag] += 1;
		} else {
			acc[tag] = 1;
		}
	});
	return acc;
}, {} as TagCount);


const Tags = () => {
	return (
		<Layout>
			<main className={cn.container}>
				{Object.entries(tags).map(([tag, count]) => (
					<div key={tag} className={cn.tag}>{tag}: {count}</div>
				))}
			</main>
		</Layout>
	);
};

export default memo(Tags);
