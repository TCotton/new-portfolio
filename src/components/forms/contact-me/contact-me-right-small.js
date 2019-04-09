import React, { Component } from 'react';

class ContactMeRightSmall extends Component {

	shouldComponentUpdate () {
		return true;
	}

	render () {

		return (
			<div className='contact__right-small'>
				<h4 className='content-title'>
					{`Get in touch`}
				</h4>

				<p>
					{`Andy Walpole`}
					<br />
					{`Web Developer`}
				</p>

				<p>
					<a
						className='underline'
						href='mailto:me@andywalpole.me?Subject=Contact%20from%20portfolio'
					>
						{`me@andywalpole.me`}
					</a>
				</p>
			</div>
		);
	}
}

export default ContactMeRightSmall;
