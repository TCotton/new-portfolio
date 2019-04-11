import React, { Component } from 'react';
import Layout from '../components/layout';
import AboutMeLeft from '../components/about-me-left';
import AboutMeRight from '../components/about-me-right'

class AboutMe extends Component {

	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<Layout>
				<div className='banner'>

					<section>
						<h2 className='page-top-title'>
							{'About me'}
						</h2>
					</section>

					<div
						className='main-content clearfix aboutme content-text'
						itemScope
						itemType='http://schema.org/ProfilePage'
					>
						<AboutMeLeft />
						<AboutMeRight />

					</div>

				</div>
			</Layout>
		);
	}
}

export default AboutMe;

