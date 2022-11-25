exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: '@babel/plugin-transform-react-jsx',
		options: {
			runtime: 'automatic',
		},
	});
};

exports.createPages = async ({ actions: { createPage } }) => {
	

	// Create a page for each Pokémon.
	allPokemon.forEach(pokemon => {
		createPage({
			path: `/pokemon/${pokemon.name}/`,
			component: require.resolve('./src/templates/pokemon.js'),
			context: { pokemon },
		});
	});
};
