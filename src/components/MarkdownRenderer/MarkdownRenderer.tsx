/**
 * @author ryan yang
 *
 * @description react-markdown custom renderer
 */
import ListItemRenderer from './ListItemRenderer';
import CodeRenderer from './CodeRenderer';
import LinkRenderer from './LinkRenderer';
import * as cn from './MarkdownRenderer.module.scss';
import { header } from './HeaderRenderer/HeaderRenderer.module.scss';
import H1Renderer from './H1Renderer';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type {
	NormalComponents,
	ReactMarkdownProps,
} from 'react-markdown/lib/complex-types';
import type { ReactNode } from 'react';

const MarkdownRenderer: SpecialComponents & NormalComponents = {
	code: CodeRenderer,
	blockquote: ({ children }: ReactMarkdownProps) => (
		<div className={cn.blockquote}>{children}</div>
	),
	em: ({ children }: ReactMarkdownProps) => (
		<span className='italicize'>{children}</span>
	),
	h1: H1Renderer,
	h2: ({ children }: ReactMarkdownProps) => (
		<h2 className={header}>{children}</h2>
	),
	h3: ({ children }: ReactMarkdownProps) => (
		<h3
			className={header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h3>
	),
	h4: ({ children }: ReactMarkdownProps) => (
		<h4
			className={header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h4>
	),
	ol: ({ children }: ReactMarkdownProps) => <ol>{children}</ol>,
	ul: ({ children }: ReactMarkdownProps) => <ul>{children}</ul>,
	li: ListItemRenderer,
	a: LinkRenderer,
	strong: ({ children }: ReactMarkdownProps) => (
		<strong className={cn.bolded}>{children}</strong>
	),
	table: ({ children }: ReactMarkdownProps) => (
		<div className={cn.table}>
			<table>{children}</table>
		</div>
	),
};

export default MarkdownRenderer;
