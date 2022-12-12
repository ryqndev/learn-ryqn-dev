import { Helmet } from 'react-helmet';
import { IArticle } from '../types';

export interface IHeadProps {
	meta: IArticle;
}

const Head = ({ meta: { title, date, author, summary, tags } }: IHeadProps) => {
	const { uploaded, updated } = date;

	const toISO = (dateString: string) => new Date(dateString).toISOString();

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='author' content={author.join(', ')} />
			<meta name='keywords' content={tags.join(', ')} />
			<meta name='description' content={summary} />
			<meta name='type' content='article' />
			<meta name='date' content={toISO(updated)} />

			{/* OG tags */}
			<meta name='og:title' content={title} />
			<meta name='og:site_name' content='learn.ryqn.dev' />
			<meta name='og:description' content={summary} />
			<meta name='og:type' content='article' />
			<meta property='article:author' content={author.join(', ')} />
			<meta property='article:tag' content={tags.join(', ')} />
			<meta property='article:published_time' content={toISO(uploaded)} />
			<meta property='article:modified_time' content={toISO(updated)} />

			<meta name='robots' content='index, follow' />
		</Helmet>
	);
};

export default Head;
