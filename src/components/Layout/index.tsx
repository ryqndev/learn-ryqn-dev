import { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navigation } from './components';
import * as cn from './Layout.module.scss';
import './styles/main.scss';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Head />
			<Navigation />
			<TransitionGroup>
				<CSSTransition
					key={location.pathname}
					classNames='fast fade'
					timeout={150}
				>
					<>{children}</>
				</CSSTransition>
			</TransitionGroup>
		</>
	);
};
export const Head = () => (
	<Helmet>
		<link
			href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/css?family=B612+Mono'
			rel='stylesheet'
		/>
		<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@800&display=swap" rel="stylesheet" /> 
		<link
			href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;800'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/css2?family=Nunito'
			rel='stylesheet'
		/>
		<link
			href='https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;600;800'
			rel='stylesheet'
		/>
		<script
			defer
			data-domain='learn.ryqn.dev'
			src='https://plausible.io/js/plausible.js'
		></script>
	</Helmet>
);

export default memo(Layout);
