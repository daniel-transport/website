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
	],
};
