/**
 * @author ryan yang
 *
 * @description react-markdown custom renderer
 */
import ListItemRenderer from './ListItemRenderer';
import HeaderRenderer from './HeaderRenderer';
import CodeRenderer from './CodeRenderer';
import LinkRenderer from './LinkRenderer';
import './MarkdownRenderer.scss';

const MarkdownRenderer = {
	code: CodeRenderer,
	blockquote: ({ children }) => (
		<div className='md-blockquote'>{children}</div>
	),
	emphasis: ({ children }) => <span className='italicize'>{children}</span>,
	heading: HeaderRenderer,
	inlineCode: ({ children }) => (
		<span className='md-render--inline-code'>{children}</span>
	),
	list: ({ children }) => <ol>{children}</ol>,
	listItem: ListItemRenderer,
	link: LinkRenderer,
	strong: ({children}) => <strong className="bolded">{children}</strong>,
	table: ({ children }) => {
		return (
			<div className='md-render--table'>
				<table>{children}</table>
			</div>
		);
	},
};

export default MarkdownRenderer;
