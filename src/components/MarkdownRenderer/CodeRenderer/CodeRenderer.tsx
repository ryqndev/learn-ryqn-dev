// import { UnControlled as CodeMirror } from 'react-codemirror2';
import CodeMirror from '@uiw/react-codemirror';
import FileStructureDisplay from './FileStructureDisplay';
import type { CodeComponent, CodeProps } from 'react-markdown/lib/ast-to-react';
import * as cn from './CodeRenderer.module.scss';

const Code: CodeComponent = ({
	node,
	children,
	className,
	inline,
}: CodeProps) => {
	if (inline) return <span className={cn.inline}>{children}</span>;

	console.log(node, children, className);

	if (!className) return children;

	if (className === 'language-file')
		return <FileStructureDisplay value={children} />;

	const options = {
		mode: className.split('-')[1],
		theme: 'material-palenight',
		lineNumbers: true,
		viewportMargin: Infinity,
		tabSize: 2,
	};

	if (options.mode === 'html') {
		options.mode = 'htmlmixed';
	}
	if (options.mode === 'bash') {
		options.lineNumbers = false;
		options.mode = 'shell';
	}

	return (
		<div className={cn.code}>
			<div className={cn.title}>
				<svg height='44px' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='25px' cy='22px' r='6.5px' fill='red' />
					<circle cx='48px' cy='22px' r='6.5px' fill='yellow' />
					<circle cx='71px' cy='22px' r='6.5px' fill='green' />
				</svg>
				<h3>{node?.data?.meta}</h3>
			</div>
			<div className={cn.editor}>
				<CodeMirror
					theme={'dark'}
					value={children[0] as string}
					options={options}
					// onChange={(editor, data, value) => {}}
				/>
			</div>
		</div>
	);
};

export default Code;
