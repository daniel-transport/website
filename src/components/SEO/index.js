import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, pathname, article }) => {
	const { site, image } = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					defaultTitle: title
					defaultDescription: description
					siteUrl: url
				}
			}
			image: file(relativePath: { eq: "logo.svg" }) {
				publicURL
			}
		}
	`);

	const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		titleTemplate: '%s',
		description: description || defaultDescription,
		image: `${siteUrl}${image.publicURL}`,
		url: `${siteUrl}${pathname || '/'}`,
		type: article ? 'article' : 'website',
		html: {
			lang: 'pl-PL',
		},
	};

	return (
		<>
			<Helmet
				title={seo.title}
				titleTemplate={seo.titleTemplate}
				htmlAttributes={seo.html}
			>
				<meta name="description" content={seo.description} />
				<meta name="image" content={seo.image} />
				<meta property="og:url" content={seo.url} />
				<meta property="og:type" content={seo.type} />
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:image" content={seo.image} />
			</Helmet>
		</>
	);
};

export default SEO;

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	pathname: PropTypes.string,
	article: PropTypes.bool,
};

SEO.defaultProps = {
	title: null,
	description: null,
	pathname: null,
	article: false,
};
