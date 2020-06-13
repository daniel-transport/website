import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Parallax from 'components/Parallax';
import { Wrapper, Header, H1, H2 } from './styles';

const Hero = ({ id }) => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				hero {
					title
					subtitle
					cover {
						alt
						file {
							childImageSharp {
								fluid(quality: 50, maxWidth: 1920) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	`);

	const { title, subtitle, cover } = contentYaml.hero;

	return (
		<Wrapper id={id}>
			<Parallax image={cover.file} alt={cover.alt} />
			<Header>
				<H1>{title}</H1>
				<H2>{subtitle}</H2>
			</Header>
		</Wrapper>
	);
};

Hero.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Hero;
