import React from 'react';
import renderer from 'react-test-renderer';
import AboutMe from '../about-me';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticQuery } from 'gatsby'

describe('About Me', () => {

	let component, instance;
	const mockStore = configureStore();
	const store = mockStore();

	beforeEach( () => {

		StaticQuery.mockImplementationOnce( ( { render } ) =>
			render( {
				site: {
					siteMetadata: {
						title: `The portfolio and blog of web developer Andy Walpole`
					},
				},
			} )
		)

		StaticQuery.mockImplementationOnce( ( { render } ) =>
			render( {
				site: {
					siteMetadata: {
						description: `description`,
						title: `The portfolio and blog of web developer Andy Walpole`,
						author: `whatever`
					},
				},
			} )
		)

	} );

	beforeEach( () => {
		component = renderer.create(
			<Provider store={store}>
				<AboutMe />
			</Provider>
		);
		instance = component.getInstance();
	});

	it('renders correctly', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<AboutMe />
				</Provider>
			)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})

/*	it('should call shouldComponentUpdate', () => {
		const shouldUpdate = instance.shouldComponentUpdate();
		expect(shouldUpdate).toBe(true);
	});*/
})
