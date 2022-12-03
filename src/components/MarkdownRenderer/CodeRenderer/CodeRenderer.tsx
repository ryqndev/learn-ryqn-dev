import CodeMirror from '@uiw/react-codemirror';
import FileStructureDisplay from './FileStructureDisplay';
import type { CodeComponent, CodeProps } from 'react-markdown/lib/ast-to-react';
import * as cn from './CodeRenderer.module.scss';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { PalenightTheme } from './theme';
import { useState } from 'react';
import clsx from 'clsx';

const Code: CodeComponent = ({
	node,
	children,
	className,
	inline,
}: CodeProps) => {
	const [minimized, setMinimized] = useState(false);
	const [hover, setHover] = useState(false);

	if (inline) return <span className={cn.inline}>{children}</span>;

	const extensions = [];

	switch (className?.substring(9)) {
		case undefined:
		case null:
			return <>{children}</>;
		case 'file':
			return <FileStructureDisplay value={children} />;
		case 'html':
			extensions.push(html());
			break;
		case 'css':
			extensions.push(css());
			break;
		case 'js':
		case 'ts':
		case 'jsx':
		case 'tsx':
		case 'javascript':
			extensions.push(
				javascript({
					jsx: className === 'jsx' || className === 'tsx',
					typescript: className === 'ts' || className === 'tsx',
				})
			);
			break;
		case 'py':
		case 'python':
			extensions.push(python());
			break;
	}

	return (
		<div className={cn.code}>
			<div className={cn.title}>
				<svg
					height='44px'
					xmlns='http://www.w3.org/2000/svg'
					onMouseOver={() => setHover(true)}
					onMouseOut={() => setHover(false)}
				>
					<circle cx='25px' cy='22px' r='6.5px' fill='red'></circle>
					<circle
						cx='48px'
						cy='22px'
						r='6.5px'
						fill='yellow'
						onClick={() => setMinimized(p => !p)}
					/>

					<rect
						x={45}
						y={21.25}
						width='6'
						height={1.5}
						// fill='black'
						rx={0.5}
						className={clsx(cn.icon, hover && cn.hovered)}
					/>

					<circle cx='71px' cy='22px' r='6.5px' fill='green' />
				</svg>
				<h3>{node?.data?.meta as string}</h3>
			</div>
			{!minimized && (
				<div className={cn.editor}>
					<CodeMirror
						theme={PalenightTheme}
						value={children[0] as string}
						extensions={extensions}
						basicSetup={{
							syntaxHighlighting: true,
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default Code;
