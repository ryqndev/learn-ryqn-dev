import * as cn from '../HeaderRenderer/HeaderRenderer.module.scss';

const H1Renderer = (props) => {
    const headerContent = props.node.children[0].value;
	const headerHashLink = headerContent.split(' ').join('-').toLowerCase();

	return (
		<header className={cn.article}>
			<h1 className={cn.header} id={headerHashLink}>
				{headerContent}
			</h1>
			<p>
				by{' '}
				<a
					href='https://ryqn.dev/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Ryan Yang
				</a>
			</p>
		</header>
	);
};

export default H1Renderer;
