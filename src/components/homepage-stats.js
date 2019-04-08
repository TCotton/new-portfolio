import React, { Component } from 'react';
import STATS from '../config/front_page_stats.json';

class HomePageStats extends Component {

	constructor ( props ) {
		super( props );
	}

	state = {
		stats: STATS
	}

	shouldComponentUpdate () {
		return true;
	}

	stats ({item}) {
		return item.section;
	}

	render () {
		const { stats } = this.state;

		return (
			<React.Fragment>
				{stats.blocks.length > 0 && stats.blocks.map((item) => this.stats({ item }))}
			</React.Fragment>
		);
	}
}

export default HomePageStats;

