import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import { getTheme, setTheme as updateTheme } from '../../controller/theme';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import cn from './Navbar.module.scss';

const Navbar = () => {
	const [theme, setTheme] = useState(getTheme());

	useEffect(() => {
		updateTheme(theme);
	}, [theme]);

	return (
		<nav className={cn.container}>
			<Link to='/'>
				<Logo />
			</Link>
			<Link to='/' className={cn.name}>
				learn.ryqn.dev
			</Link>
			{/* <Link to="/template">templates</Link> */}
			<label className={cn.toggle}>
				<Toggle
					checked={theme === 1}
					icons={false}
					onChange={() => {
						setTheme(theme === 1 ? 0 : 1);
					}}
				/>
			</label>
		</nav>
	);
};

export default Navbar;
