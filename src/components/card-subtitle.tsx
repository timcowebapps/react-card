'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardSubtitleProps, CardSubtitlePropTypes, CardSubtitleDefaultProps } from './card-subtitle-props';

const CardSubtitle: React.StatelessComponent<any> = (props: ICardSubtitleProps) => {
	const { schema, ...attributes } = props;
	const options = _.merge({}, schema, this.default.defaultProps.schema);

	return React.createElement(options.tag, {
		...attributes,
		className: Classes.bem(options.properties.classes.pipeline, options.properties.classes.prefix, {
			element: "subtitle",
			modifiers: options.properties.classes.modifiers
		})
	}, props.children);
};

CardSubtitle.propTypes = CardSubtitlePropTypes;
CardSubtitle.defaultProps = CardSubtitleDefaultProps;

export default CardSubtitle;
