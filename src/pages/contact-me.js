import React, { Component } from 'react';
import Layout from '../components/layout';
import ContactMeRightSmall from '../components/forms/contact-me/contact-me-right-small'
import ContactMeLeftLarge from '../components/forms/contact-me/contact-me-left-large'

class ContactMe extends Component {

	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<Layout>
				<div className='banner'>

					<section>
						<h2 className='page-top-title'>
							{`Contact me`}
						</h2>
					</section>

				</div>

				<div
					className='main-content clearfix form content-text'
					itemScope
					itemType='http://schema.org/ContactPage'
				>

					<ContactMeLeftLarge />
					<ContactMeRightSmall />

				</div>
			</Layout>
		)
	}
}

export default ContactMe;
