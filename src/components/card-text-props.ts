'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardTextProps extends React.Props<any> {
	/**
	 * Дочерние элементы
	 *
	 * @type {React.ReactNode}
	 * @memberof ICardTextProps
	 */
	children?: React.ReactNode;

	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardTextProps
	 */
	schema: IJsonSchema;
}

export const CardTextPropTypes = {
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

export const CardTextDefaultProps = {
	schema: {
		tag: "p",
		properties: {
			classes: {
				prefix: "card"
			}
		}
	}
};
