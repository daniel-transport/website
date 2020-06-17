import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import About from 'views/About';
import Offer from 'views/Offer';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<About id="o_nas" />
		<Offer id="oferta" />
	</>
);

export default IndexPage;
