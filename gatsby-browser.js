/* eslint react/prop-types:0 */
/* eslint import/prefer-default-export: 0 */
import './src/assets/styles/global.css';
import './src/assets/styles/fonts.css';

import React from 'react';
import Layout from './src/layouts/index';

const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export { wrapPageElement };
