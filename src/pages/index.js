import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import Seo from '../components/seo';

const hi = `Hi people`;
const welcome = `Welcome to your new Gatsby site.`;
const now = `Now go build something great.`;
const go = `Go to page 2`;

const IndexPage = () => (
	<Layout>
		<Seo
			keywords={[`application`, `gatsby`, `react`]}
			title="Home"
		/>
		<h1>
			{hi}
		</h1>
		<p>
			{welcome}
		</p>
		<p>
			{now}
		</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		<Link to="/page-2/">
			{go}
		</Link>
	</Layout>
)

export default IndexPage
