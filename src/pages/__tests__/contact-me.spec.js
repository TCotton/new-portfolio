import React from 'react';
import renderer from 'react-test-renderer';
import ContactMe from '../contact-me';

describe('About Me', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<ContactMe />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<ContactMe />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
