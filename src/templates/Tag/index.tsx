import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { memo } from 'react';
import { Layout, MarkdownRenderer } from '@components';
import { PageProps } from 'gatsby';
import * as cn from './Tutorial.module.scss';
import { IArticle } from '@templates/Article/types';

const Tag = ({ pageContext }: PageProps<any, IArticle>) => {
	const { content, link } = pageContext;

	const transformImageUri = (uri: string) =>
		`https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev/src/content/${link.join('/')}${uri.substr(
			1
		)}`;

	return (
		<Layout>
			<div className={cn.container}>
				<article className={cn.article}>
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

export default memo(Tag);
