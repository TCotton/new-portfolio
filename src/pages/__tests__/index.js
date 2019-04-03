import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import Index from "../index"

beforeEach(() => {
	useStaticQuery.mockImplementationOnce(({ render }) =>
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

describe("Index", () => {
	it("renders correctly", () => {
		const data = {
			site: {
				siteMetadata: {
					author: "Andy Walpole",
					title: `The portfolio and blog of web developer Andy Walpole`
				},
			},
		}

		const tree = renderer.create(<Index data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	})
})
