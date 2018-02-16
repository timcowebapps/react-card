'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export interface ICardProps {
	/**
	 * Схема.
	 * 
	 * @type {IJsonSchema}
	 * @memberof ICardProps
	 */
	schema: IJsonSchema;

	/**
	 * Название карточки
	 *
	 * @type {string | React.ReactNode}
	 * @memberof Card.IProps
	 */
	title?: string | React.ReactNode;

	/**
	 * Дочерние элементы
	 *
	 * @type {React.ReactNode}
	 * @memberof Card.IProps
	 */
	children?: React.ReactNode;
}

export const CardPropTypes = {
	schema: PropTypes.shape({
		tag: PropTypes.string,
		properties: PropTypes.shape({
			classes: PropTypes.shape({
				pipeline: PropTypes.object.isRequired,
				block: PropTypes.string,
				//modifiers: PropTypes.oneOfType
			})
		})
	})
}
