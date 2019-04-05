import React from 'react';
import renderer from 'react-test-renderer';

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
		const tree = renderer
			.create(
				<Provider store={{}}>
					<Layout>
						<div />
					</Layout>
				</Provider>)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})
})
