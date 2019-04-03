import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"
import Index from "../index"

beforeEach(() => {
	StaticQuery.mockImplementationOnce(({ render }) =>
		render({
			site: {
				siteMetadata: {
					description: 'whatever',
					title: `The portfolio and blog of web developer Andy Walpole`,
					author: `Andy Walpole`,
				},
			},
		})
	)
})

describe.skip("Index", () => {
	it("renders correctly", () => {
		const data = {
			site: {
				siteMetadata: {
					description: "whatever",
					author: "Andy Walpole",
					title: `The portfolio and blog of web developer Andy Walpole`
				},
			},
		}

		const tree = renderer.create(<Index data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	})
})
