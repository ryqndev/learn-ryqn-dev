import { readFileSync } from 'fs';
import path from 'path';
import articles from './src/content/articles/Articles.json'

exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: '@babel/plugin-transform-react-jsx',
		options: {
			runtime: 'automatic',
		},
	});
};

exports.createPages = async ({ actions: { createPage } }) => {
	const fetchArticle = link => readFileSync(`./src/content/articles${link}/README.md`, 'utf-8');

	articles.forEach(article => {
		createPage({
			path: `/articles${article.link}`,
			component: require.resolve('./src/templates/Article/index.tsx'),
			context: { ...article, content: fetchArticle(article.link) },
		});
	});
};

exports.onCreateWebpackConfig = function ({ actions }) {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@app': path.resolve(__dirname, 'src')
			}
		}
	})
}
