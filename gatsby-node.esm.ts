import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import articles from './src/content/articles/Articles.json'
import labs from './src/content/labs/Labs.json'

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
			path: `/article${article.link}`,
			component: require.resolve('./src/templates/Article/index.tsx'),
			context: { ...article, content: fetchArticle(article.link) },
		});
	});

	const fetchLabExercises = (link, exercise) => yaml.load(readFileSync(`./src/content/labs${link}/${exercise}`, 'utf-8'));

	labs.forEach(lab => {
		createPage({
			path: `/lab${lab.link}`,
			component: require.resolve('./src/templates/Lab/index.tsx'),
			context: { ...lab, exercises: lab.exercises.map(exercise => fetchLabExercises(lab.link, exercise)) },
		});
	});
};

exports.onCreateWebpackConfig = function ({ actions }) {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src/components'),
				'@content': path.resolve(__dirname, 'src/content'),
				'@templates': path.resolve(__dirname, 'src/templates')
			}
		}
	})
}
