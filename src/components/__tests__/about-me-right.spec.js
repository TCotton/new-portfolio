import React from 'react';
import renderer from 'react-test-renderer';

import AboutMeRight from '../about-me-right';

describe('AboutMeRight', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<AboutMeRight />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<AboutMeRight />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
