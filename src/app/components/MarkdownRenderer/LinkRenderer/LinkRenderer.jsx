import { Link } from 'react-router-dom';
import cn from './LinkRenderer.module.scss';

const LinkRenderer = ({ href, children }) => {
	if (href.substring(0, 2) === './')
		return (
			<Link className={cn.container} to={href}>
				{children}
			</Link>
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
