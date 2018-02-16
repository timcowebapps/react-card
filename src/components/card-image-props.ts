'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardImageProps extends React.Props<any> {
	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardImageProps
	 */
	schema: IJsonSchema;
}

export const CardImagePropTypes = {
	schema: PropTypes.shape({
		properties: PropTypes.shape({
			classes: PropTypes.shape({
				pipeline: PropTypes.object.isRequired,
				prefix: PropTypes.string,
				//modifiers: PropTypes.oneOfType
			})
		})
	})
}

export const CardImageDefaultProps = {
	schema: {
		properties: {
			classes: {
				prefix: "card"
			}
		}
	}
};
