import React from 'react';
import renderer from 'react-test-renderer';

import Seo from '../seo';
import { StaticQuery } from 'gatsby'

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

describe('SEO', () => {

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
