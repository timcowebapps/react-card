'use strict';

/* Внешние зависимости */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

const propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	cls: PropTypes.string
};

const defaultProps = {
	tag: 'h4'
};

const CardTitle: React.StatelessComponent<any> = (props: any) => {
	const {
		cls,
		tag,
		...attributes
	} = props;

	return React.createElement(tag, { ...attributes, className: cls }, props.children);
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;