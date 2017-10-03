'use strict';

/* Внешние зависимости. */
import * as React from 'react';

export interface ICardProps {
	/**
	 * Включает отображение границы вокруг карточки
	 *
	 * @type {Boolean}
	 * @memberof Card.IProps
	 */
	bordered?: boolean;

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

	injectStyles?: any;
}