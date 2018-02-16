'use strict';

/* Внешние зависимости */
import * as _ from 'lodash';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/* Внутрение зависимости */
import { Card, CardHead, CardBlock, CardTitle, CardSubtitle, CardText, CardImage, CardFooter } from '../src/components/index';
import 'timcowebapps-scss-dir/_reboot.scss';

var styles: any = require('./index.scss');

const App: React.StatelessComponent<any> = (props: any) => {
	return (
		<ul className="listing">
			<li>
				<Card schema={{ properties: { classes: { pipeline: styles, block: "card", modifiers: ["bordered"] } } }}>
					<CardHead schema={{ properties: { tag: "div", classes: { pipeline: styles, prefix: "card" } } }}>Lorem ipsum dolor sit amet, consectetur.</CardHead>
					<CardImage schema={{ properties: { classes: { pipeline: styles, prefix: "card" } } }} src="http://via.placeholder.com/318x180/f2f2f2/666" alt="Card image" />
					<CardBlock schema={{ properties: { classes: { pipeline: styles, prefix: "card" } } }} style={{ height: '9.375rem' }}>
						<CardTitle schema={{ properties: { classes: { pipeline: styles, prefix: "card" } } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardTitle>
						<CardSubtitle schema={{ properties: { classes: { pipeline: styles, prefix: "card" } } }}>Lorem ipsum dolor.</CardSubtitle>
						<CardText schema={{ properties: { classes: { pipeline: styles, prefix: "card", modifiers: ["more"] } } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies tempus felis, scelerisque pharetra odio porta non. Mauris ornare nisl ut commodo mattis. Curabitur.</CardText>
					</CardBlock>
					<CardFooter schema={{ properties: { tag: "div", classes: { pipeline: styles, prefix: "card" } } }}>footer</CardFooter>
				</Card>
			</li>
		</ul>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('container')
);
