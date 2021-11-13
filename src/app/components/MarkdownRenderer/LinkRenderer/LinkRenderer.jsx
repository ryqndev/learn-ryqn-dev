import { Link } from 'react-router-dom';

const LinkRenderer = ({ href, children }) => {
	if (href.substring(0, 2) === './') return <Link to={href}>{children}</Link>;
	return (
		<a href={href} target="_blank" rel='noopener noreferrer'>
			{children}
		</a>
	);
};

export default LinkRenderer;
