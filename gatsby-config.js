const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Daniel - Agencja Transportowa w Warszawie',
		description:
			'Agencja Transportowa DANIEL jest renomowaną firmą transportowo-spedycyjną, istniejącą na rynku od 1989 roku.',
		url: 'https://www.daniel.com.pl',
		author: '@lasmedia',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				assets: path.join(__dirname, 'src/assets'),
				components: path.join(__dirname, 'src/components'),
				layouts: path.join(__dirname, 'src/layouts'),
				pages: path.join(__dirname, 'src/pages'),
				utils: path.join(__dirname, 'src/utils'),
				views: path.join(__dirname, 'src/views'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'icons',
				path: `${__dirname}/src/assets/icons`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/content`,
			},
		},
		'gatsby-transformer-yaml',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				displayName: false,
				fileName: false,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Daniel - Agencja Transportowa w Warszawie',
				short_name: 'Daniel',
				lang: 'pl',
				start_url: '/',
				background_color: '#6A1485',
				theme_color: '#0B0628',
				display: 'minimal-ui',
				icon: 'src/assets/icons/logomark.png',
			},
		},
	],
};
