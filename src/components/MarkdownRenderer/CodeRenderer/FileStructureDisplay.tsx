import type { ReactNode } from "react";
import cn from './CodeRenderer.module.scss';

const FileStructureDisplay = ({ value }: {value: ReactNode}) => {
	return (
		<div className='file-structure--display'>
			<h3>File Structure</h3>
			{value}
		</div>
	);
};

export default FileStructureDisplay;
