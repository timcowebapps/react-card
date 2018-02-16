'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardImageProps, CardImagePropTypes, CardImageDefaultProps } from './card-image-props';

const CardImage: React.StatelessComponent<any> = (props: ICardImageProps) => {
	const {
		schema,
		...attributes
	} = props;

	return React.createElement('img', {
		...attributes,
		className: Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.prefix, {
			element: "image",
			modifiers: schema.properties.classes.modifiers
		})
	});
};

CardImage.propTypes = CardImagePropTypes;
CardImage.defaultProps = CardImageDefaultProps;

export default CardImage;
