import React from 'react';
import renderer from 'react-test-renderer';
import SideProjects from '../side-projects';

describe('SideProjects', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<SideProjects />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<SideProjects />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
