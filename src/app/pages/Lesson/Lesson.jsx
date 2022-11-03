import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useState, useEffect, memo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { MarkdownRenderer, Spinner } from '../../components';

const Lesson = () => {
	const { lessonName } = useParams();
	const { hash } = useLocation();
	const [content, setContent] = useState(null);

	useEffect(() => {
		import(`../../../content/${lessonName}/README.md`).then(response => {
			fetch(response.default)
				.then(res => res.text())
				.then(setContent);
		});
	}, [lessonName]);

	useEffect(() => {
		const anchor = hash ? document.getElementById(hash.substr(1)) : false;

		window.scrollTo({
			top: anchor ? anchor.getBoundingClientRect().top - 80 : 0,
			behavior: 'smooth',
		});
	}, [content, hash]);

	const transformImageUri = uri =>
		`https://cdn.jsdelivr.net/gh/ryqndev/learn-ryqn-dev@content-update/src/content/${lessonName}${uri.substr(
			1
		)}`;

	return content === null ? (
		<Spinner />
	) : (
		<div className='lesson-wrapper page__component'>
			<article className='md-renderer'>
				<ReactMarkdown
					remarkPlugins={[gfm]}
					components={{ ...MarkdownRenderer }}
					transformLinkUri={null}
					transformImageUri={transformImageUri}
				>
					{content}
				</ReactMarkdown>
			</article>
		</div>
	);
};

export default memo(Lesson);
