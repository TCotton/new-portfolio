import React from 'react';
import renderer from 'react-test-renderer';

import FooterCodeExample from '../footer-code-example';

describe('FooterCodeExample', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<FooterCodeExample />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<FooterCodeExample />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
