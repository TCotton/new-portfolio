import React from 'react';
import renderer from 'react-test-renderer';

import AboutMeLeft from '../about-me-left';

describe('AboutMeLeft', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<AboutMeLeft />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<AboutMeLeft />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
