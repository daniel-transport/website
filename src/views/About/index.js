import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Card from 'components/Card';
import { SectionBright, SectionTitle } from 'components/Share';
import { Wrapper, StyledCard } from './styles';

const About = ({ id }) => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				about {
					title
					cards {
						title
						text
						cover {
							alt
							file {
								publicURL
							}
						}
					}
				}
			}
		}
	`);

	const { title: aboutTitle, cards } = contentYaml.about;

	return (
		<SectionBright id={id}>
			<Wrapper>
				<SectionTitle hide>{aboutTitle}</SectionTitle>
				{cards.map(({ title, text, cover }) => (
					<StyledCard
						as={Card}
						key={title}
						title={title}
						icon={cover.file}
						alt={cover.alt}
						text={text}
					/>
				))}
			</Wrapper>
		</SectionBright>
	);
};

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;
