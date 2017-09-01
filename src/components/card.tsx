'use strict';

/* Внешние зависимости */
import * as React from 'react';
import { Classes } from 'timcowebapps-react-utils';

/* Внутренние зависимости */
import { ICardProps } from './cardProps';
import CardHeader from './cardHeader';

class Card extends React.Component<ICardProps, any> {
	public static displayName: string = 'card';

	public render() {
		const compCls = "card";
		const {
			bordered = true, injectStyles
		} = this.props;

		return (
			<article className={Classes.combine(injectStyles.card,  (bordered) ? [injectStyles[`${compCls}_bordered`]]: [injectStyles[`${compCls}_bordered_gradient`]] )}>
				{this.props.children}
			</article>
		);
	}
}

export default Card;