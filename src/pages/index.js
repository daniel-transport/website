import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import About from 'views/About';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<About id="o_nas" />
	</>
);

export default IndexPage;
