import { AnchorLink } from 'gatsby-plugin-anchor-links';

import type { ReactElement } from 'react';
import type { LiComponent } from 'react-markdown/lib/ast-to-react';
import { ListItem } from './ListItemRenderer';
import * as cn from './ListItemRenderer.module.scss';

const ListItemRenderer: LiComponent = ({
	ordered,
	children,
	...props
}): ReactElement | null => {
	const extraTextFromInnerLink = node =>
		node.children?.[0]?.children?.[0]?.value;

	const link: string = location.pathname + children?.[0]?.props?.href ?? '';

	if (children.length > 1) {
		return (
			<>
				<AnchorLink to={link}>
					<ListItem>{extraTextFromInnerLink(props.node)}</ListItem>
				</AnchorLink>
				<div className={cn.indent}>{children.slice(1)}</div>
			</>
		);
	}

	return (
		<>
			<AnchorLink to={link}>
				<ListItem>{extraTextFromInnerLink(props.node)}</ListItem>
			</AnchorLink>
		</>
	);
};

export default ListItemRenderer;
