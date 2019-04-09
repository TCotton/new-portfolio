import React from 'react';
import renderer from 'react-test-renderer';
import ContactMeRightSmall from '../contact-me-right-small';

describe('ContactMeRightSmall', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<ContactMeRightSmall />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<ContactMeRightSmall />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
