import React from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';
import { MenuList, MenuItem, MenuLink } from './styles';

const Menu = ({ items, click, className }) => (
	<MenuList className={className}>
		{items.map(item => (
			<MenuItem key={item.title}>
				<MenuLink as={Conditional} to={item.to} click={click}>
					{item.title}
				</MenuLink>
			</MenuItem>
		))}
	</MenuList>
);

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	click: PropTypes.func,
	className: PropTypes.string,
};

Menu.defaultProps = {
	click: null,
	className: null,
};

export default Menu;
