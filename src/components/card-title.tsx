'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardTitleProps, CardTitlePropTypes, CardTitleDefaultProps } from './card-title-props';

const CardTitle: React.StatelessComponent<any> = (props: ICardTitleProps) => {
	const { schema, ...attributes } = props;
	const options = _.merge({}, schema, this.default.defaultProps.schema);

	return React.createElement(options.tag, {
		...attributes,
		className: Classes.bem(options.properties.classes.pipeline, options.properties.classes.prefix, {
			element: "title",
			modifiers: options.properties.classes.modifiers
		})
	}, props.children);
};

CardTitle.propTypes = CardTitlePropTypes;
CardTitle.defaultProps = CardTitleDefaultProps;

export default CardTitle;
