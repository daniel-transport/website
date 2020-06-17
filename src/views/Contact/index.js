import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ContactBtn from 'components/ContactBtn';
import { SectionBright, SectionTitle } from 'components/Share';
import { Wrapper, Column } from './styles';

const Contact = ({ id }) => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				contact {
					title
					cards {
						text
						to
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

	const { title, cards } = contentYaml.contact;
	const [address, ...restContacts] = cards;

	return (
		<SectionBright id={id}>
			<SectionTitle>{title}</SectionTitle>
			<Wrapper>
				<Column>
					<ContactBtn
						text={address.text}
						icon={address.cover.file}
						alt={address.cover.alt}
						to={address.to}
					/>
				</Column>
				<Column>
					{restContacts.map(({ text, cover, to }) => (
						<ContactBtn
							key={to}
							text={text}
							icon={cover.file}
							alt={cover.alt}
							to={to}
						/>
					))}
				</Column>
			</Wrapper>
		</SectionBright>
	);
};

Contact.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contact;
