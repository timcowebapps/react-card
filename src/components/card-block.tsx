'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardBlockProps, CardBlockPropTypes, CardBlockDefaultProps } from './card-block-props';

const CardBlock: React.StatelessComponent<any> = (props: ICardBlockProps) => {
	const {
		schema,
		...attributes
	} = props;

	return React.createElement("div", {
		...attributes,
		className: Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.prefix, {
			element: "block",
			modifiers: schema.properties.classes.modifiers
		})
	}, props.children);
};

CardBlock.propTypes = CardBlockPropTypes;
CardBlock.defaultProps = CardBlockDefaultProps;

export default CardBlock;
