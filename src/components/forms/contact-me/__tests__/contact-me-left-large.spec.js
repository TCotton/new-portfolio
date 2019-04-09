import React from 'react';
import renderer from 'react-test-renderer';
import ContactMeLeftLarge from '../contact-me-left-large';

describe('ContactMeLeftLarge', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<ContactMeLeftLarge />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<ContactMeLeftLarge />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
