import { IArticleMetaData } from '@templates/Article/types';
import { useCallback, useEffect, useState } from 'react';
import { navigate } from '@reach/router';

const useKeyboard = (results: IArticleMetaData[], containerRef: HTMLDivElement | null) => {
	const [selected, setSelected] = useState(0);
	const numOfResults = results.length;

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const key = event.key;
			if (key === 'ArrowUp')
				setSelected(p => (p + numOfResults - 1) % numOfResults);
			if (key === 'ArrowDown') setSelected(p => (p + 1) % numOfResults);
			if (key === 'Enter') {
				navigate('/' + results[selected].link.join('/'));
			}
		},
		[setSelected, numOfResults, selected]
	);

	useEffect(() => {
		if(!containerRef) return;
		
		containerRef.addEventListener('keydown', handleKeyPress);
		return () => containerRef.removeEventListener('keydown', handleKeyPress);
	}, [handleKeyPress]);

	return { selected };
};

export { useKeyboard };
