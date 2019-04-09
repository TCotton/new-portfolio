import React, { Component } from 'react';

class ContactMeLeftLarge extends Component {

	shouldComponentUpdate () {
		return true;
	}
	
	render () {
		return (
			<div className='contact__left-large'>
				<div className='hidden-desktop'>
					<h4 className='content-title'>
						{'Get in touch left'}
					</h4>

					<p>
						{'Andy Walpole'}
						<br />
						{'Web Developer'}
					</p>

					<p>
						<a
							className='underline'
							href='mailto:me@andywalpole.me?Subject=Contact%20from%20portfolio'
						>
							{'me@andywalpole.me'}
						</a>
					</p>
				</div>
			</div>
		);
	}
}

export default ContactMeLeftLarge;
