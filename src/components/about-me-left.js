import React, { Component } from 'react';

class AboutMeLeft extends Component {
	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<div className='left-large'>

				<h3 className='content-title'>
					{'A little bit about myself'}
				</h3>

				<p>
					{'I built my first website with Microsoft Frontpage in 2002, committing myself full-time to web development from 2008 onwards.'}
				</p>

				<p>
					{'During this time I have worked with a wide variety of companies and individuals that range from sole traders to multinational corporations.'}
				</p>

				<p>
					{'I particularly enjoy working in a team and take great pride in my craftsmanship so as to produce the highest quality code.'}
				</p>

				<h4 className='content-title'>
					{'My core skill sets and strengths'}
				</h4>

				<section className='clearfix'>

					<div className='button-skills-aboutme section per_90'>
						<span>
							{'HTML5'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_90'>
						<span>
							{'CSS3'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_80'>
						<span>
							{'JavaScript'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_80'>
						<span>
							{'AngularJS'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_80'>
						<span>
							{'SASS'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_70'>
						<span>
							{'React'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_70'>
						<span>
							{'npm'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_70'>
						<span>
							{'Accessibility'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_70'>
						<span>
							{'Git'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_60'>
						<span>
							{'SOLID'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_60'>
						<span>
							{'Vue.js'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_50'>
						<span>
							{'MongoDB'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_50'>
						<span>
							{'node.js'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_50'>
						<span>
							{'Usability'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_30'>
						<span>
							{'backbone.js'}
						</span>
					</div>

					<div className='button-skills-aboutme section per_100'>
						<span>
							{'Willingness to learn more'}
						</span>
					</div>

				</section>

			</div>
		);
	}
}

export default AboutMeLeft;
