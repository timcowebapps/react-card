'use strict';

/* Внешние зависимости */
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* Внутрение зависимости */
import { Card, CardHeader, CardBlock, CardTitle, CardSubtitle, CardText, CardImage, CardFooter } from '../src/components/index';
import 'timcowebapps-scss-dir/_reboot.scss';
var cardStyles: any = require('../src/components/card.scss');

const App: React.StatelessComponent<any> = (props: any) => {
	return (
		<ul className="listing">
			<li>
				<Card injectStyles={cardStyles} bordered={false}>
					<CardHeader cls={cardStyles['card__header']}>Lorem ipsum dolor sit amet, consectetur.</CardHeader>
					<CardImage cls={cardStyles[`card__img`]} src="http://via.placeholder.com/318x180/f2f2f2/666" alt="Card image" />
					<CardBlock cls={cardStyles[`card__block`]} style={{ height: '9.375rem' }}>
						<CardTitle cls={cardStyles[`card__title`]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardTitle>
						<CardSubtitle cls={cardStyles[`card__subtitle`]}>Lorem ipsum dolor.</CardSubtitle>
						<CardText cls={cardStyles[`card__description_more`]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies tempus felis, scelerisque pharetra odio porta non. Mauris ornare nisl ut commodo mattis. Curabitur.</CardText>
					</CardBlock>
					<CardFooter cls={cardStyles[`card__footer`]}>footer</CardFooter>
				</Card>
			</li>
		</ul>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);