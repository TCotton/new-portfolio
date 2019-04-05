import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../header';

describe('Footer', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<Footer />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<Footer />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
