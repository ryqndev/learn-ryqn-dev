import { ReactNode, useCallback, useState } from 'react';
import * as crcn from '../../CodeRenderer.module.scss';
import * as cn from './FileStructureDisplay.module.scss';
import { Folder, File } from './types';

import Caret from './expand.svg';
import clsx from 'clsx';
/**
 * @deprecated
 *
 * Old way of doing it. Just renders a markdown file type. For all future use
 * cases, we want to use the parsed JSON version  */
const FileStructureDisplay = ({ value }: { value: ReactNode }) => {
	return (
		<div className={crcn.container}>
			<h3>File Structure</h3>
			{value}
		</div>
	);
};

/**
 * Takes in a stringified JSON of a file structure and renders an interactive
 * file system component.
 *
 * @todo: should sort the contents by folders first, and then files
 *
 */
const ParsedFileStructureDisplay = ({ value }: { value: string }) => {
	const folder = JSON.parse(value);

	return (
		<div className={cn.container}>
			<h3>File Structure</h3>
			<FolderRenderer folder={folder} />
		</div>
	);
};

const FileRenderer = ({ file: { type, name } }: { file: File }) => {
	return (
		<div className={cn.file}>
			<i className={cn[type]}></i>
			{name}
		</div>
	);
};

const FolderRenderer = ({ folder }: { folder: Folder }) => {
	const [open, setOpen] = useState(true);
	const toggleOpen = useCallback(() => setOpen(p => !p), []);

	return (
		<div className={cn.folder}>
			<div
				className={clsx(cn['arrow'], open && cn.open)}
				onClick={toggleOpen}
			>
				<Caret />
			</div>
			<i className={cn['folderIcon']} onClick={toggleOpen}></i>
			<div className={cn.name} onClick={toggleOpen}>
				{folder.name}
			</div>
			{open &&
				folder.contents.map(item =>
					item?.type ? (
						<FileRenderer file={item as File} />
					) : (
						<FolderRenderer folder={item as Folder} />
					)
				)}
		</div>
	);
};

export { FileStructureDisplay, ParsedFileStructureDisplay };
