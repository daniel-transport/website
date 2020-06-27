import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import LeafletMap from 'components/LeafletMap';
import { SectionTitle } from 'components/Share';
import { StyledMap } from './styles';

const Contact = ({ id }) => {
	const {
		contentYaml: { map },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				map {
					to
					file {
						publicURL
					}
				}
			}
		}
	`);

	const [first, second] = map.to.split(',');

	return (
		<section id={id}>
			<SectionTitle hide>Mapa</SectionTitle>
			<StyledMap
				as={LeafletMap}
				position={[Number(first), Number(second)]}
				iconImg={map.file.publicURL}
			/>
		</section>
	);
};

Contact.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contact;
