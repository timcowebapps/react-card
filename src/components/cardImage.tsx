'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

const propTypes = {
	cls: PropTypes.string
};

const CardImage: React.StatelessComponent<any> = (props: any) => {
	const {
		cls,
		...attributes
	} = props;

	return React.createElement('img', { ...attributes, className: cls });
};

CardImage.propTypes = propTypes;

export default CardImage;