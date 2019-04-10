import React, { Component } from 'react';
import validator from 'validator';

class ContactMeLeftLarge extends Component {

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	state = {
		email: '',
		error: null,
		message: '',
		name: '',
		success: null,
		zipcode: ''
	};

	shouldComponentUpdate () {
		return true;
	}

	validation ( name, value ) {
		let formValid = true;
		let nameValid = true;
		let messageValid = true;
		let emailValid = true;

		switch( name ) {
			case 'name':
				if( validator.isEmpty(value) ) {
					formValid nameValid = false;
					errors.push(`Please don't leave the ${name} field empty`);
					console.dir( 'name' );
				}
				break;
		case 'message':
			if( validator.isEmpty(value) ) {
				errors.push(`Please don't leave the ${name} field empty`);
				console.dir( 'name' );
			}
			break;
			case 'email':
				if( validator.isEmail( value ) ) {
					console.dir('email');
				}
				break;
			case 'zipcode':
				if( !validator.isEmpty(value) ) {
					console.dir( 'zipcode' );
				}
				break;
			default:
				break;
		}

		this.setState( {
			formErrors: fieldValidationErrors,
			emailValid: emailValid,
			passwordValid: passwordValid
		}, this.validateForm );

	}

	handleSubmit ( event ) {
		event.preventDefault();

		Array.from(event.target.elements).forEach((content) => {
			console.dir(content.type);
			this.validation(content.type, content.value);
		});

		// console.dir(event.target.elements);

		// this.validation(event);
	}

	handleInputChange (event) {

		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

	}

	render () {

		const {
			email,
			error,
			message,
			name,
			success,
			zipcode
		} = this.state;

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

				{success &&
				<p className='contact-form-success'>
					{success}
				</p>
				}

				{error &&
				<p className='contact-form-failure'>
					{error}
				</p>
				}

				<form
					name='contactForm'
					noValidate='novalidate'
					onSubmit={this.handleSubmit}
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
							onChange={this.handleInputChange}
							placeholder='Your full name'
							required='required'
							type='text'
							value={name}
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
							onChange={this.handleInputChange}
							placeholder='Your email address'
							required='required'
							type='email'
							value={email}
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
							onChange={this.handleInputChange}
							placeholder='Your message'
							required='required'
							rows='10'
							value={message}
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
							onChange={this.handleInputChange}
							type='text'
							value={zipcode}
						/>

					</span>

					<input
						className='button-contact'
						type='submit'
						value='Send message'
					/>

				</form>
			</div>
		);
	}
}

export default ContactMeLeftLarge;
