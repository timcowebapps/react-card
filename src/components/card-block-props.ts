'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardBlockProps extends React.Props<any> {
	/**
	 * Дочерние элементы
	 *
	 * @type {React.ReactNode}
	 * @memberof ICardBlockProps
	 */
	children?: React.ReactNode;

	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardBlockProps
	 */
	schema: IJsonSchema;
}

export const CardBlockPropTypes = {
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

export const CardBlockDefaultProps = {
	schema: {
		properties: {
			classes: {
				prefix: "card"
			}
		}
	}
};
