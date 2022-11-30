import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `learn.ryqn.dev`,
		siteUrl: `https://learn.ryqn.dev`
	},
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
		resolve: 'gatsby-plugin-manifest',
		options: {
			"icon": "src/assets/logo.png"
		}
	}, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/assets/"
			},
			__key: "images"
		}]
};

export default config;
