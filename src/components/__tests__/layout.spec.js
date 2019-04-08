import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Layout from '../layout';
import { StaticQuery } from 'gatsby';
import { Provider } from 'react-redux';

beforeEach(() => {
	StaticQuery.mockImplementationOnce(({ render }) =>
		render({
			site: {
				siteMetadata: {
					title: `The portfolio and blog of web developer Andy Walpole`,
				},
			},
		})
	)
})

describe('Layout', () => {
	it('renders correctly', () => {
		const mockStore = configureStore();
		const store = mockStore();
		const tree = renderer
			.create(
				<Provider store={store}>
					<Layout>
						<div />
					</Layout>
				</Provider>)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})
})
