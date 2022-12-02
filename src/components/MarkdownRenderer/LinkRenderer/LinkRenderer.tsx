// import { Link } from 'gatsby';
// import scrollWithOffset from '../../../controller/libs/hashLinkScroll';
import * as cn from './LinkRenderer.module.scss';

const LinkRenderer = ({ href, children }) => {
	// if (href.substring(0, 2) === './')
	// 	return (
	// 		// <Link className={cn.container} to={href}>
	// 			// {children}
	// 		// </Link>
	// 	);
	// if (href.substring(0, 1) === '#')
	// 	return (
	// 		<HashLink
	// 			className={cn.container}
	// 			smooth to={href} 
	// 			scroll={el => {
	// 				setTimeout(() => scrollWithOffset(el), 20);
	// 			}}
	// 		>
	// 			{children}
	// 		</HashLink>
	// 	);
	return (
		<a
			className={cn.container}
			href={href}
			target='_blank'
			rel='noopener noreferrer'
		>
			{/* {children} */}
		</a>
	);
};

export default LinkRenderer;
