import React from 'react';
import renderer from 'react-test-renderer';
import AboutMe from '../about-me';

describe('About Me', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<AboutMe />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<AboutMe />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
