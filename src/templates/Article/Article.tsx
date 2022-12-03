import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useState, useEffect, memo } from 'react';
import { Layout, MarkdownRenderer } from '../../components';
import { PageProps } from 'gatsby';
import * as cn from './Article.module.scss';

export interface ArticleProps {
	content: string;
	link: string;
}

const Article = ({ pageContext }: PageProps<any, ArticleProps>) => {
	const { content, link } = pageContext;
	// const { hash } = useLocation();

	// useEffect(() => {
	// 	const anchor = hash ? document.getElementById(hash.substr(1)) : false;

	// 	window.scrollTo({
	// 		top: anchor ? anchor.getBoundingClientRect().top - 80 : 0,
	// 		behavior: 'smooth',
	// 	});
	// }, [content, hash]);
	// console.log(article, props);

	const transformImageUri = (uri: string) =>
		`https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev/src/content${link}${uri.substr(
			1
		)}`;

	return (
		<Layout>
			<div className={cn.container}>
				<article>
					<ReactMarkdown
						remarkPlugins={[gfm]}
						components={MarkdownRenderer}
						transformLinkUri={null}
						transformImageUri={transformImageUri}
					>
						{content}
					</ReactMarkdown>
				</article>
			</div>
		</Layout>
	);
};
export const Head = () => {
	return (
		<>
			<title>Hey tehre</title>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito&family=Plus+Jakarta+Sans:wght@400;800&display=swap'
				rel='stylesheet'
			/>
		</>
	);
};

export default memo(Article);
