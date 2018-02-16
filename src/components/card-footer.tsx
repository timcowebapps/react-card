'use strict';

/* Внешние зависимости */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardFooterProps, CardFooterPropTypes, CardFooterDefaultProps } from './card-footer-props';

const CardFooter: React.StatelessComponent<any> = (props: ICardFooterProps) => {
	const {
		schema,
		...attributes
	} = props;

	return React.createElement(schema.properties.tag, {
		...attributes,
		className: Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.prefix, {
			element: "footer",
			modifiers: schema.properties.classes.modifiers
		})
	}, props.children);
};

CardFooter.propTypes = CardFooterPropTypes;
CardFooter.defaultProps = CardFooterDefaultProps;

export default CardFooter;
