import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ErrorValidationAlert = ( { txtLbl } ) => (
	<span
		className='form-error-message'
		role='alert'
		tabIndex='0'
	>
		{txtLbl}
	</span>
);

ErrorValidationAlert.propTypes = {
	txtLbl: PropTypes.string
}

ErrorValidationAlert.defaultProps = {
	txtLbl: ''
}

const txtFieldState = {
	value: '',
	valid: true,
	typeMismatch: false,
	errMsg: ''
};

class ContactMeLeftLarge extends Component {

	constructor ( props ) {
		super( props );

		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	state = {
		email: {
			...txtFieldState,
			fieldName: 'Your email address',
			required: true,
			requiredTxt: 'Please supply a valid email address.',
			formatErrorTxt: 'Incorrect email format'
		},
		message: {
			...txtFieldState,
			fieldName: 'Please write a message',
			required: true,
			requiredTxt: 'Don\'t forget to write a message!'
		},
		name: {
			...txtFieldState,
			fieldName: 'Your full name',
			required: true,
			requiredTxt: 'Please supply your name'
		},
		zipcode: {
			...txtFieldState,
			fieldName: 'zipcode',
			required: false,
			requiredTxt: `Don't include zipcode`
		},
		allFieldsValid: false
	}

	componentDidMount () {
		/* must be refactored to use callback: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md */
		this.setState( { homeURI: window.location.protocol + '//' + window.location.hostname + ( window.location.port.length === 0 ? '' : ':3000' ) } ); // eslint-disable-line react/no-did-mount-set-state
	}

	shouldComponentUpdate () {
		return true;
	}

	reduceFormValues = formElements => {
		const arrElements = Array.from( formElements );

		// extract specific properties in Constraint Validation API using this code snippet
		const formValues = arrElements
			.filter( elem => elem.name.length > 0 )
			.map( x => {
				const { typeMismatch } = x.validity;
				const { name, type, value } = x;

				return {
					name,
					type,
					typeMismatch, // use typeMismatch when format is incorrect(e.g. incorrect email)
					value,
					valid: name === 'zipcode' && value.trim().length > 0 ? false : x.checkValidity()
				};
			} )
			.reduce( ( acc, currVal ) => {
				//use reduce, ready to put it in our state
				const { value, valid, typeMismatch } = currVal;
				const { fieldName, requiredTxt, formatErrorTxt } = this.state[ currVal.name ]; // eslint-disable-line
				//get the rest of properties inside the state object

				// map these properties back to state so we use reducer...
				acc[ currVal.name ] = {
					value,
					valid,
					typeMismatch,
					fieldName,
					requiredTxt,
					formatErrorTxt
				};

				return acc;
			}, {} );

		return formValues;
	};

	checkAllFieldsValid = formValues => {
		return !Object.keys( formValues )
			.map( x => formValues[ x ] )
			.some( field => !field.valid );
	};

	handleSubmit ( event ) {
		event.preventDefault();

		const form = event.target;
		// const { email: { value: emailDetails }, message: { value: messageDetails }, name: { value: nameDetails } } = this.state;

		// extract specific properties in Constraint Validation API using this code snippet
		const formValues = this.reduceFormValues( form.elements );
		const allFieldsValid = this.checkAllFieldsValid( formValues );
		//note: put ajax calls here to persist the form inputs in the database.

		if( allFieldsValid ) {

			const { homeURI } = this.state;

			axios.post( `${homeURI}/api/sendmail`, { ...formValues } )
				.then( res => {

					if( res.data.error ) {
						this.setState( { error: res.data.error } );
					}

					if( res ) {
						if( res.data.success ) {
							this.setState( { message: res.data.message }, () => {
								document.querySelector( 'body' ).scrollTop = 0;
							} );
						}
					}

				} ).catch( ( e ) => {
				this.setState( { error: e.toString() } );
			} )
		}
		//END

		this.setState( { ...formValues, allFieldsValid } ); // set the state based on the extracted values from Constraint Validation API
	}

	handleInputChange ( event ) {

		const target = event.target;
		const targetValue = target.value;
		const name = target.name;

		this.setState( {
			[ name ]: {
				value: targetValue
			}
		} );
	}

	render () {

		const {
			allFieldsValid,
			email,
			name,
			message,
			zipcode,
		} = this.state;

		const successFormDisplay = allFieldsValid ? 'block' : 'none';
		const inputFormDisplay = !allFieldsValid ? 'block' : 'none';

		const renderEmailValidationError = email.valid ? (
			''
		) : (
			<ErrorValidationAlert
				txtLbl={email.typeMismatch ? email.formatErrorTxt : email.requiredTxt}
			/>
		);

		const renderNameValidationError = name.valid ? (
			''
		) : (
			<ErrorValidationAlert txtLbl={name.requiredTxt} />
		);

		const renderMessageValidationError = message.valid ? (
			''
		) : (
			<ErrorValidationAlert txtLbl={message.requiredTxt} />
		);

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

				<p className={`contact-form-success ${successFormDisplay}`}>
					{'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'}
				</p>

				<p className={`contact-form-failure ${inputFormDisplay}`}>
					{'The form has not been submitted because of errors. Please review the form error messages and click submit again'}
				</p>

				<form
					name='contactForm'
					noValidate='novalidate'
					onSubmit={this.handleSubmit}
				>
					<span className='form-division-blocks'>

						{renderNameValidationError}

						<label
							className='visuallyhidden'
							htmlFor='name'
						>
							{name.fieldName}
						</label>

						<input
							className='form-input'
							data-testid='name'
							id='name'
							maxLength='64'
							name='name'
							onChange={this.handleInputChange}
							placeholder={name.fieldName}
							required='required'
							type='text'
							value={name.value}
						/>
					</span>

					<span className='form-division-blocks'>

						{renderEmailValidationError}

						<label
							className='visuallyhidden'
							htmlFor='email'
						>
							{email.fieldName}
						</label>

						<input
							autoCapitalize='off'
							autoCorrect='off'
							className='form-input'
							data-testid='email'
							id='email'
							maxLength='64'
							name='email'
							onChange={this.handleInputChange}
							placeholder={email.fieldName}
							required='required'
							type='email'
							value={email.value}
						/>
					</span>

					<span className='form-division-blocks'>

						{renderMessageValidationError}

						<label
							className='visuallyhidden'
							htmlFor='message'
						>
							{message.fieldName}
						</label>

						<textarea
							className='form-textarea'
							cols='10'
							data-testid='message'
							id='message'
							maxLength='1000'
							name='message'
							onChange={this.handleInputChange}
							placeholder={message.fieldName}
							required='required'
							rows='10'
							value={message.value}
						/>

					</span>

					<span>

						<label
							className='hide'
							htmlFor='zipcode'
						>
							{zipcode.fieldName}
						</label>

						<input
							data-testid='zipcode'
							id='zipcode'
							name='zipcode'
							onChange={this.handleInputChange}
							placeholder={zipcode.fieldName}
							type='text'
							value={zipcode.value}
						/>

					</span>

					<input
						className='button-contact'
						data-testid='addBtn'
						type='submit'
						value='Send message'
					/>

				</form>
			</div>
		);
	}
}

export default ContactMeLeftLarge;
