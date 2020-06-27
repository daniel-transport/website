import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import About from 'views/About';
import Offer from 'views/Offer';
import Contact from 'views/Contact';
import Map from 'views/Map';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<About id="o_nas" />
		<Offer id="oferta" />
		<Contact id="dane_firmy" />
		<Map id="mapa" />
	</>
);

export default IndexPage;
