import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Wrapper } from './styles';

const Parallax = ({ image, alt }) => {
	const [actualPos, setActualPos] = useState(0);

	useEffect(() => {
		const updateScroll = () => {
			setActualPos(window.pageYOffset);
		};
		window.addEventListener('scroll', updateScroll);
		return () => window.removeEventListener('scroll', updateScroll);
	}, []);

	return (
		<Wrapper
			as={Img}
			alt={alt}
			fluid={image.childImageSharp.fluid}
			transform={actualPos}
		/>
	);
};

Parallax.propTypes = {
	image: PropTypes.shape().isRequired,
	alt: PropTypes.string,
};

Parallax.defaultProps = {
	alt: null,
};

export default Parallax;
