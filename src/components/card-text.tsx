'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardTextProps, CardTextPropTypes, CardTextDefaultProps } from './card-text-props';


const CardText: React.StatelessComponent<any> = (props: ICardTextProps) => {
	const { schema, ...attributes } = props;
	const options = _.merge({}, schema, this.default.defaultProps.schema);

	return React.createElement(options.tag, {
		...attributes,
		className: Classes.bem(options.properties.classes.pipeline, options.properties.classes.prefix, {
			element: "text",
			modifiers: options.properties.classes.modifiers
		})
	}, props.children);
};

CardText.propTypes = CardTextPropTypes;
CardText.defaultProps = CardTextDefaultProps;

export default CardText;
