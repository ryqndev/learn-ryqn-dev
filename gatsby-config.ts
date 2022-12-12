import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `learn.ryqn.dev`,
		siteUrl: `https://learn.ryqn.dev`,
	},
	trailingSlash: "never",
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-svg',
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				duration: 750
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/logo.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/',
			},
			__key: 'images',
		},
	],
};

export default config;
