import * as cn from './Navigation.module.scss';
import { Search } from './Search';
import Logo from '../../../../assets/logo.png';
import { Link } from 'gatsby';

const Navigation = () => {
	return (
		<nav className={cn.container}>
			<Link to="/"><img src={Logo} /></Link>
			<Search />
		</nav>
	);
};

export { Navigation };
