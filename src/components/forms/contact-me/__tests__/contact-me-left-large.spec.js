import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import axiosMock from 'axios'
import ContactMeLeftLarge from '../contact-me-left-large';

describe( 'ContactMeLeftLarge', () => {

	it( 'renders correctly', () => {
		const { asFragment } = render( <ContactMeLeftLarge /> );
		expect( asFragment() ).toMatchSnapshot();
	} )

	test( 'ContactMeLeftLarge should not submit if value added to spam trap zipoode field', () => {

		const { getByTestId } = render( <ContactMeLeftLarge /> )

		let newItem = 'This is a name'
		fireEvent.change( getByTestId( 'name' ), { target: { value: newItem } } )
		getByTestId( 'addBtn' ).click();

		expect(axiosMock.post).not.toHaveBeenCalledTimes(1)

	} )


	test( 'ContactMeLeftLarge should submit if all name, email and message fields are correct', () => {

		const { getByTestId } = render( <ContactMeLeftLarge /> )

		let newName = 'This is a name';
		let newEmail = 'me@andywalpole.me';
		let newMessage = 'This is a message';

		fireEvent.change( getByTestId( 'name' ), { target: { value: newName } } );
		fireEvent.change( getByTestId( 'email' ), { target: { value: newEmail } } );
		fireEvent.change( getByTestId( 'message' ), { target: { value: newMessage } } );
		getByTestId( 'addBtn' ).click();

		expect(axiosMock.post).toHaveBeenCalledTimes(1);

	} )

} );
