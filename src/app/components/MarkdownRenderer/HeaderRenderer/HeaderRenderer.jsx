const HeaderRenderer = props => {
	const headerContent = props.node.children[0].value;
	const headerHashLink = headerContent.split(' ').join('-').toLowerCase();

	switch (props?.level) {
		case 1:
			document.title = headerContent;
			return (
				<header className='article--header'>
					<h1 className='md-render--header' id={headerHashLink}>
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
		case 2:
			return (
				<h2 className='md-render--header' id={headerHashLink}>
					{headerContent}
				</h2>
			);
		case 3:
			return (
				<h3 className='md-render--header' id={headerHashLink}>
					{headerContent}
				</h3>
			);
		default:
			return (
				<h4 className='md-render--header' id={headerHashLink}>
					{headerContent}
				</h4>
			);
	}
};

export default HeaderRenderer;