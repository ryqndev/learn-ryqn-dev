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

const MarkdownRenderer = {
	code: CodeRenderer,
	blockquote: ({ children }) => (
		<div className='md-blockquote'>{children}</div>
	),
	em: ({ children }) => <span className='italicize'>{children}</span>,
	h1: H1Renderer,
	h2: ({ children }) => (
		<h2
			className={cn.header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3
			className={cn.header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h3>
	),
	h4: ({ children }) => (
		<h4
			className={cn.header}
			id={children[0].split(' ').join('-').toLowerCase()}
		>
			{children}
		</h4>
	),
	// pre: ({ children }) => (
	// 	<span className='md-render--inline-code'>{children}</span>
	// ),
	ol: ({ children }) => <ol>{children}</ol>,
	ul: ({ children }) => <ul>{children}</ul>,
	li: ListItemRenderer,
	a: LinkRenderer,
	strong: ({ children }) => <strong className='bolded'>{children}</strong>,
	table: ({ children }) => {
		return (
			<div className='md-render--table'>
				<table>{children}</table>
			</div>
		);
	},
};

export default MarkdownRenderer;
