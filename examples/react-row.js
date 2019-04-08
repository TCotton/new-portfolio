import React from 'react';
import ReactDOM from 'react-dom';

const itemsArray = [
	{ name: 'Drake' },
	{ name: 'Halsey' },
	{ name: 'Camillo Cabello' },
	{ name: 'Travis Scott' },
	{ name: 'Bazzi' },
	{ name: 'Flume' },
	{ name: 'Nicki Minaj' },
	{ name: 'Kodak Black' },
	{ name: 'Tyga' },
	{ name: 'Buno Mars' },
	{ name: 'Lil Wayne' }
]; // our data

const Row = ( { index } ) => (
	<div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
		{itemsArray[ index ].name}
	</div>
);

const Example = () => (
	<div className='List'>
		{itemsArray.map( ( item, index ) => Row( { index } ) )}
	</div>
);

ReactDOM.render( <Example />, document.getElementById( 'root') );
