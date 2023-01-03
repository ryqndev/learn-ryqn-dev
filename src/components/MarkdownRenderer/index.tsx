/**
 * @author ryan yang
 *
 * @description react-markdown custom renderer
 */
import ListItemRenderer from './ListItemRenderer';
import CodeRenderer from './CodeRenderer';
import LinkRenderer from './LinkRenderer';
import * as cn from './MarkdownRenderer.module.scss';
import H1Renderer from './H1Renderer';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type {
	NormalComponents,
	ReactMarkdownProps,
} from 'react-markdown/lib/complex-types';
import { StandardHeader } from './HeaderRenderer';
import { TableOfContent } from './TableOfContent';

const MarkdownRenderer: SpecialComponents & NormalComponents = {
	code: CodeRenderer,
	blockquote: ({ children }: ReactMarkdownProps) => (
		<div className={cn.blockquote}>{children}</div>
	),
	em: ({ children }: ReactMarkdownProps) => (
		<span className='italicize'>{children}</span>
	),
	h1: H1Renderer,
	h2: StandardHeader,
	h3: StandardHeader,
	h4: StandardHeader,
	h5: StandardHeader,
	h6: StandardHeader,
	p: ({ children }) => <p className={cn.p}>{children}</p>,
	ol: ({ children }: ReactMarkdownProps) => <ol>{children}</ol>,
	ul: TableOfContent,
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
