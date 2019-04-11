import React, { Component } from 'react';
import Layout from '../components/layout';

class SideProjects extends Component {

	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<Layout>
				<div id='banner'>

					<section>
						<h2 className='page-top-title'>
							{'Side projects'}
						</h2>
					</section>

				</div>
			</Layout>
		);
	}
}

export default SideProjects;
