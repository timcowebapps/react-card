## React-Card [![Discord](https://discordapp.com/api/guilds/402238411639095297/widget.png)](https://discord.gg/vCMcgwQ)

[![dependencies](https://david-dm.org/timcowebapps/react-card.svg)](https://david-dm.org/timcowebapps/react-card)

[![NPM](https://nodei.co/npm/timcowebapps-react-card.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/timcowebapps-react-card/)

Микрокомпонент карточки

### Зависимости

```console
$ npm i -S timcowebapps-react-utils react react-dom prop-types lodash
$ npm i -S git+https://git@github.com/timcowebapps/scss.git
$ npm i -D webpack webpack-dev-server typescript ts-node ts-loader style-loader sass-loader path node-sass css-loader html-webpack-plugin extract-text-webpack-plugin @types/react-dom @types/react @types/node @types/jquery
```

### Установка компонента

```console
$ npm i -S timcowebapps-react-card
```

### Настройка webpack

```js
{
	// ...
	resolve: {
		alias: {
			'dir': path.resolve(__dirname, 
				'node_modules', 'timcowebapps-react-card', 'lib')
		}
	}
	// ...
}
```
