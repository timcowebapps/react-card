'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardSubtitleProps extends React.Props<any> {
	/**
	 * Дочерние элементы
	 *
	 * @type {React.ReactNode}
	 * @memberof ICardSubtitleProps
	 */
	children?: React.ReactNode;

	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardSubtitleProps
	 */
	schema: IJsonSchema;
}

export const CardSubtitlePropTypes = {
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

export const CardSubtitleDefaultProps = {
	schema: {
		tag: "h6",
		properties: {
			classes: {
				prefix: "card"
			}
		}
	}
};
