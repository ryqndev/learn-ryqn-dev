import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { ReactNode } from 'react';
import * as cn from './LinkRenderer.module.scss';

const LinkRenderer = ({
	href,
	children,
}: HTMLAnchorElement & { children: ReactNode }) => {
	if (href.substring(0, 1) === '.')
		return (
			<Link className={cn.container} to={href}>
				{children}
			</Link>
		);
	if (href.substring(0, 1) === '#')
		return (
			<AnchorLink to={href} className={cn.container}>
				{children}
			</AnchorLink>
		);
	return (
		<a
			className={cn.container}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			{children}
		</a>
	);
};

export default LinkRenderer;
