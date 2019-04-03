import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../header';

describe('Header', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<Header siteTitle="Default Starter" />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<Header siteTitle="Default Starter" />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
