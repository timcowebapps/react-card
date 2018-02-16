'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardTitleProps extends React.Props<any> {
	/**
	 * Дочерние элементы
	 *
	 * @type {React.ReactNode}
	 * @memberof ICardTitleProps
	 */
	children?: React.ReactNode;

	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardTitleProps
	 */
	schema: IJsonSchema;
}

export const CardTitlePropTypes = {
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

export const CardTitleDefaultProps = {
	schema: {
		tag: "h4",
		properties: {
			classes: {
				prefix: "card"
			}
		}
	}
};
