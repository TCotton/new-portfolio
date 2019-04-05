import React, { Component } from 'react';
import STATS from '../config/front_page_stats.json';

class HomePageStats extends Component {
	constructor ( props ) {
		super( props );
	}

	shouldComponentUpdate () {
		return true;
	}

	render () {
		console.dir(STATS);
		return (
			<React.Fragment />
		);
	}
}

export default HomePageStats;

