import { readFileSync } from 'fs';
import articles from './src/content/Articles.json'

exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: '@babel/plugin-transform-react-jsx',
		options: {
			runtime: 'automatic',
		},
	});
};

exports.createPages = async ({ actions: { createPage } }) => {
	articles.forEach(article => {
		createPage({
			path: `/articles${article.link}`,
			component: require.resolve('./src/templates/Article/index.tsx'),
			context: { ...article, content: fetchArticle(article.link) },
		});
	});
};

const fetchArticle = link => {
    const markdownContent = readFileSync(`./src/content${link}/README.md`, 'utf-8');
	return markdownContent;
};
