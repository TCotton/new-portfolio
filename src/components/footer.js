import React, { Component } from 'react';
import FooterCodeExample from './footer-code-example';

class Footer extends Component {
	constructor ( props ) {
		super( props );
	}

	shouldComponentUpdate () {
		return true;
	}

	/*eslint-disable react/no-danger */
	render () {

		const copyright = `&copy; Andy Walpole / `;
		const sitemap = 'Sitemap';

		return (

			<footer className='footer'>
				<div className='footer-top'>
					<a href='https://github.com/TCotton/portfolio'>
						<FooterCodeExample />
					</a>
				</div>

				<div className='footer-bottom'>
					<p className='footer-copyright'>
						<span dangerouslySetInnerHTML={{__html: `${copyright}`}} />
						<a href='/sitemap'>
							{sitemap}
						</a>
					</p>
				</div>
			</footer>
		);
	}
	/*eslint-enable react/no-danger */
}

export default Footer;

