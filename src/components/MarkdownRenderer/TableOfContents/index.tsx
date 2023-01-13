import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import * as cn from './TableOfContent.module.scss';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import clsx from 'clsx';

const TableOfContents = ({ value }: ReactMarkdownProps) => {
	return (
		<div className={cn.container}>
			<ReactMarkdown remarkPlugins={[gfm]} components={TOCInlineRenderer}>
				{value[0]}
			</ReactMarkdown>
		</div>
	);
};

const TOCInlineRenderer = {
	a: ({ children, href }) => {
		const anchorHref = href.replace(/[^a-z0-9#\-]/gi, '');
		const [visible, setVisible] = useState(true);

		useLayoutEffect(() => {
			const observer = new IntersectionObserver(([entry]) => {
				setVisible(entry.isIntersecting);
			});

			try {
				observer.observe(document.querySelector(anchorHref + '-visible'));
				return () => observer.unobserve(document.querySelector(anchorHref + '-visible'));
			}
			catch(e) {
				console.error(`This article is malformed - some links might or might not work. Error: ${anchorHref}`);
			} 
		});

		return (
			<AnchorLink to={location.pathname + anchorHref} className={clsx(cn.link, visible && cn.highlight)}>
				{children}
			</AnchorLink>
		);
	},

	li: ({ children }: ReactMarkdownProps) => (
		<li className={cn.list}>{children}</li>
	),
	ol: ({ children }: ReactMarkdownProps) => (
		<ol style={{ paddingLeft: 32, listStyle: 'decimal' }}>{children}</ol>
	),
	ul: ({ children }: ReactMarkdownProps) => (
		<ul style={{ paddingLeft: 32, listStyle: 'disc' }}>{children}</ul>
	),
};

export { TableOfContents };
