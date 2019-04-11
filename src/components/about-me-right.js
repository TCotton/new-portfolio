import React, { Component } from 'react';

class AboutMeRight extends Component {
	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<div className='right-small'>

				<h5 className='content-title'>
					{'My CV and online profiles'}
				</h5>

				<p>
					{'Please read my Stack Overflow Careers page:'}
					<br />
					<a
						className='underline'
						href='https://stackoverflow.com/story/andyw'
						rel='external'
					>
						{'https://stackoverflow.com/story/andyw'}
					</a>
				</p>

				<a href='https://twitter.com/andywalpole'>
					<p>
						<img
							alt='Twitter account of Andy Walpole'
							src='/images/svg/twitter.svg'
						/>
					</p>
				</a>

				<p>
					<img
						alt='yours truly, the author of this portfolio and blog'
						src='/images/andyw.jpg'
					/>
				</p>

			</div>
		);
	}
}

export default AboutMeRight;
