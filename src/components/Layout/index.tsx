import type { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as cn from './Layout.module.scss';
import './styles/main.scss';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Head />
			<TransitionGroup>
				<CSSTransition
					key={location.pathname}
					classNames='fast fade'
					timeout={150}
				>
					{children}
				</CSSTransition>
			</TransitionGroup>
		</>
	);
};
export const Head = () => {
	return (
		<>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito&family=Plus+Jakarta+Sans:wght@400;800&display=swap'
				rel='stylesheet'
			/>
		</>
	);
};


export default Layout;
