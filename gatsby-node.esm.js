import { readFileSync, writeFileSync } from 'fs';

exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: '@babel/plugin-transform-react-jsx',
		options: {
			runtime: 'automatic',
		},
	});
};

exports.createPages = async ({ actions: { createPage } }) => {
	const lesson = {
		link: '/designing-a-url-shortener',
		title: 'Designing a URL shortener',
		content:
			"You might have heard of services like Bit.ly or TinyURL and wondered, how are these URL shorteners made? We'll explore the designs of these systems and then code our own.",
		tags: ['web developement', 'API', 'backend', 'server'],
		date: {
			updated: 'Tue, 14 Dec 2021 18:34:32 GMT',
			uploaded: 'Tue, 14 Dec 2021 18:34:32 GMT',
		},
	};

	createPage({
		path: `/articles${lesson.link}`,
		component: require.resolve('./src/templates/Lesson.tsx'),
		context: { article: fetchArticle(lesson.link) },
	});

	// Create a page for each Pokémon.
	// allPokemon.forEach(pokemon => {
	// 	createPage({
	// 		path: `/pokemon/${pokemon.name}/`,
	// 		component: require.resolve('./src/templates/pokemon.js'),
	// 		context: { pokemon },
	// 	});
	// });
};

const fetchArticle = link => {
    const markdownContent = readFileSync(`./src/content${link}/README.md`);

	console.log('@ryqndev fetch', markdownContent);

	return markdownContent;
};
