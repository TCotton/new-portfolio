import React, { Component } from 'react';

class ContactMeLeftLarge extends Component {

	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<div className='contact-left-large'>
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
				<h3 className='content-title'>
					{'Send a message'}
				</h3>

				<p className='contact-form-success' />

				<p className='contact-form-failure' />

				<form
					name='contactForm'
					noValidate='novalidate'
				>
					<span className='form-division-blocks'>

						<label
							className='visuallyhidden'
							htmlFor='name'
						>
							{'Your full name'}
						</label>

						<span
							aria-labelledby='name'
							className='form-error-message'
							role='alert'
							tabIndex='0'
						>
							{'Please supply your name'}
						</span>
						<input
							className='form__input'
							id='name'
							maxLength='64'
							name='name'
							placeholder='Your full name'
							required='required'
							type='text'
							value=''
						/>
					</span>

					<span className='form-division-blocks'>

						<label
							className='visuallyhidden'
							htmlFor='email'
						>
							{'Your email address'}
						</label>

						<span
							aria-labelledby='email'
							className='form__error-message'
							role='alert'
							tabIndex='0'
						>
							{'Please supply a valid email address.'}
						</span>

						<input
							autoCapitalize='off'
							autoCorrect='off'
							className='form__input'
							id='email'
							maxLength='64'
							name='email'
							placeholder='Your email address'
							required='required'
							type='email'
							value=''
						/>
					</span>

					<span className='form-division-blocks'>

						<label
							className='visuallyhidden'
							htmlFor='message'
						>
							{'Please write a message'}
						</label>

						<span
							aria-labelledby='message'
							className='form__error-message'
							role='alert'
							tabIndex='0'
						>
							{'Don\'t forget to write a message!'}
						</span>

						<textarea
							className='form__textarea'
							cols='10'
							id='message'
							maxLength='1000'
							name='message'
							placeholder='Your message'
							required='required'
							rows='10'
						/>

					</span>

					<span className='hide'>

						<label
							className='hide'
							htmlFor='zipcode'
						>
							{'Your zipcode'}
						</label>

						<input
							className='hide'
							data-ng-pattern='zipRegex'
							id='zipcode'
							name='zipcode'
							type='text'
							value=''
						/>

					</span>
				</form>
			</div>
		);
	}
}

export default ContactMeLeftLarge;
