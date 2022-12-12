import { ReactNode } from 'react';
import * as cn from './ListItemRenderer.module.scss';

const ListItem = ({ children }: { children: ReactNode }) => {
	return (
		<span className={cn.container}>
			<span className={cn.point}>•</span>
			<span className={cn.text}>{children}</span>
		</span>
	);
};

export { ListItem };
