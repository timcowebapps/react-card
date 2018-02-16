'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardFooterProps extends React.Props<any> {
	/**
	 * Дочерние элементы
	 *
	 * @type {React.ReactNode}
	 * @memberof ICardFooterProps
	 */
	children?: React.ReactNode;

	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardFooterProps
	 */
	schema: IJsonSchema;
}

export const CardFooterPropTypes = {
	schema: PropTypes.shape({
		tag: PropTypes.string,
		properties: PropTypes.shape({
			classes: PropTypes.shape({
				pipeline: PropTypes.object.isRequired,
				prefix: PropTypes.string,
				//modifiers: PropTypes.oneOfType
			})
		})
	})
}

export const CardFooterDefaultProps = {
	schema: {
		tag: "div",
		properties: {
			classes: {
				prefix: "card"
			}
		}
	}
};
