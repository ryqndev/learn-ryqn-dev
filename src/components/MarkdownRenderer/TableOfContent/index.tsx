import clsx from 'clsx';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import * as cn from './TableOfContent.module.scss';

const TableOfContent = ({ children }: ReactMarkdownProps) => {
	const nodeRef = useRef<HTMLUListElement>(null);
    const [isPinned, setIsPinned] = useState(false);

	useEffect(() => {
		if (!nodeRef?.current) return;

		const observer = new IntersectionObserver(
			([e]) => setIsPinned(e.intersectionRatio >= 1),
			{ threshold: [1] }
		);

		observer.observe(nodeRef.current);

        return () => observer.disconnect();
	}, []);

	return (
		<ul ref={nodeRef} className={clsx(cn.container, isPinned && cn.pinned)}>
			{children}
		</ul>
	);
};

export { TableOfContent };
