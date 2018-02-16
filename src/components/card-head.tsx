'use strict';

/* Внешние зависимости */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardHeadProps, CardHeadPropTypes, CardHeadDefaultProps } from './card-head-props';

const CardHead: React.StatelessComponent<any> = (props: ICardHeadProps) => {
	const {
		schema,
		...attributes
	} = props;

	return React.createElement(schema.properties.tag, {
		...attributes,
		className: Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.prefix, {
			element: "head",
			modifiers: schema.properties.classes.modifiers
		})
	}, props.children);
};

CardHead.propTypes = CardHeadPropTypes;
CardHead.defaultProps = CardHeadDefaultProps;

export default CardHead;
