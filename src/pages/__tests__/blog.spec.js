import React from 'react';
import renderer from 'react-test-renderer';
import Blog from '../blog';

describe('Blog', () => {

	let component, instance;

	beforeEach( () => {
		component = renderer.create(
			<Blog />
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(<Blog />)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});
})
