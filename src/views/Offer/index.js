import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import FlipCard from 'components/FlipCard';
import CTA from 'components/CTA';
import { SectionDark, SectionTitle } from 'components/Share';
import {
	Wrapper,
	CardHeader,
	CardList,
	CardItem,
	Paragraph,
	BtnWrapper,
} from './styles';

const Offer = ({ id }) => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				offer {
					title
					subtitle
					text
					button {
						title
						to
					}
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

	const { title, subtitle, text, cards, button } = contentYaml.offer;

	return (
		<SectionDark id={id}>
			<Wrapper>
				<SectionTitle>{title}</SectionTitle>
				<Paragraph>{text}</Paragraph>
				<CardHeader>{subtitle}</CardHeader>
				<CardList>
					{cards.map(({ title: cardTitle, text: cardText, cover }) => (
						<CardItem key={cardTitle}>
							<FlipCard title={cardTitle} icon={cover} text={cardText} />
						</CardItem>
					))}
				</CardList>
				<BtnWrapper>
					<CTA to={button.to} title={button.title} />
				</BtnWrapper>
			</Wrapper>
		</SectionDark>
	);
};

Offer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Offer;
