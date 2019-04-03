import React from 'react';
import renderer from 'react-test-renderer';

import Seo from '../seo';
import { StaticQuery } from 'gatsby'
import Layout from '../layout'

beforeEach(() => {
	StaticQuery.mockImplementationOnce(({ render }) =>
		render({
			site: {
				siteMetadata: {
					title: `The portfolio and blog of web developer Andy Walpole`,
					author: `Andy Walpole`,
				},
			},
		})
	)
});

describe('Layout', () => {

	let props = {
		description: 'Text',
		lang: 'Text',
		meta: [],
		keywords: ['Text'],
		title: 'Text'
	};

	it('renders correctly', () => {
		const tree = renderer
			.create(
				<Seo {...props} />
				)
			.toJSON()
		expect(tree).toMatchSnapshot();
	})
})
