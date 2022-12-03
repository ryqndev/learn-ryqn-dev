import { memo, ReactNode } from 'react';
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
				href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro&amp;display=swap'
				rel='stylesheet'
			/>
			<link
				href='https://fonts.googleapis.com/css?family=B612+Mono&amp;display=swap'
				rel='stylesheet'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Raleway:wght@800&amp;display=swap'
				rel='stylesheet'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap'
				rel='stylesheet'
			/>
			<script
				defer
				data-domain='learn.ryqn.dev'
				src='https://plausible.io/js/plausible.js'
			></script>
		</>
	);
};

export default memo(Layout);
