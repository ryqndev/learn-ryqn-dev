import { Link } from 'gatsby';

const NotFoundPage = () => {
	return (
		<main>
			<title>Not found</title>
			Sorry{' '}
			<span role='img' aria-label='Pensive emoji'>
				😔
			</span>{' '}
			we couldn’t find what you were looking for.
			<br />
			<br />
			<Link to='/'>Go home</Link>.
		</main>
	);
};

export default NotFoundPage;
