import type { ReactNode } from "react";
import * as cn from './CodeRenderer.module.scss';

const FileStructureDisplay = ({ value }: {value: ReactNode}) => {
	return (
		<div className={cn.file}>
			<h3>File Structure</h3>
			{value}
		</div>
	);
};

export default FileStructureDisplay;
