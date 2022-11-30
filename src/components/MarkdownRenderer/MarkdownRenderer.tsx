/**
 * @author ryan yang
 *
 * @description react-markdown custom renderer
 */
import ListItemRenderer from './ListItemRenderer';
import CodeRenderer from './CodeRenderer';
import LinkRenderer from './LinkRenderer';
import './MarkdownRenderer.scss';
import cn from './HeaderRenderer/HeaderRenderer.module.scss';
import H1Renderer from './H1Renderer';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type { NormalComponents } from 'react-markdown/lib/complex-types';
import { ReactNode } from 'react';

const MarkdownRenderer: SpecialComponents & NormalComponents = {
	code: CodeRenderer,
	blockquote: ({ children }: {children: ReactNode}) => (
		<div className='md-blockquote'>{children}</div>
	),
	em: ({ children }: {children: ReactNode}) => <span className='italicize'>{children}</span>,
	h1: H1Renderer,
	h2: ({ children }: {children: ReactNode}) => (
		<h2
			className={cn.header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h2>
	),
	h3: ({ children }: {children: ReactNode}) => (
		<h3
			className={cn.header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h3>
	),
	h4: ({ children }: {children: ReactNode}) => (
		<h4
			className={cn.header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h4>
	),
	ol: ({ children }: {children: ReactNode}) => <ol>{children}</ol>,
	ul: ({ children }: {children: ReactNode}) => <ul>{children}</ul>,
	li: ListItemRenderer,
	a: LinkRenderer,
	strong: ({ children }: {children: ReactNode}) => <strong className='bolded'>{children}</strong>,
	table: ({ children }: {children: ReactNode}) => {
		return (
			<div className='md-render--table'>
				<table>{children}</table>
			</div>
		);
	},
};

export default MarkdownRenderer;
