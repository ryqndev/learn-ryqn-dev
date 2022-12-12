import { ReactNode } from 'react';
import { HeadingComponent } from 'react-markdown/lib/ast-to-react';
import * as cn from './HeaderRenderer.module.scss';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface IStandardHeaderProps {
	children: ReactNode[];
	node: {
		tagName: HeadingLevel;
	};
}

const StandardHeader: HeadingComponent = ({
	children,
	node: { tagName },
}) => {
	const HeaderLevel = tagName;
	const content: string = (children?.[0] as string) ?? '';
	const convertToHashLink = content.split(' ').join('-').toLowerCase();

	return <HeaderLevel className={cn.header} id={convertToHashLink}>{children}</HeaderLevel>;
};

export { StandardHeader };
