'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ICardProps, CardPropTypes } from './card-props';

class Card extends React.Component<ICardProps, {}> {
	public static displayName: string = "Card";
	public static propTypes: PropTypes.ValidationMap<ICardProps> = CardPropTypes;

	/**
	 * Конструктор класса.
	 * 
	 * @class Card
	 * @public
	 * @constructor
	 * @param {ICardProps} props Свойства компонента.
	 */
	public constructor(props?: ICardProps) {
		super(props);
	}

	/**
	 * Отрисовывает компонент.
	 * 
	 * @class Card
	 * @public
	 * @method render
	 */
	public render() {
		const { schema } = this.props;

		return React.createElement(schema.properties.tag || "div", {
			className: Classes.bem(schema.properties.classes.pipeline, schema.properties.classes.block, {
				modifiers: schema.properties.classes.modifiers
			})
		}, this.props.children);
	}
}

export default Card;
