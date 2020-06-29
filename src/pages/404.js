import React from 'react';

import SEO from 'components/SEO';
import NotFound from 'views/404';

const NotFoundPage = () => (
	<>
		<SEO title="404: Strony nie odnaleziono" />
		<NotFound />
	</>
);

export default NotFoundPage;
