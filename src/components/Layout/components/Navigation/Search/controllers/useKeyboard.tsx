import { IArticleMetaData } from '@templates/Article/types';
import { useCallback, useEffect, useState } from 'react';
import { navigate } from '@reach/router';

const useKeyboard = (results: IArticleMetaData[]) => {
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
		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [handleKeyPress]);

	return { selected };
};

export { useKeyboard };
