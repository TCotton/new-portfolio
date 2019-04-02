import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const hi = `Hi from the second page`;
const welcome = `Welcome to page 2`;
const goBack = `Go back to the homepage`;

const SecondPage = () => (
	<Layout>
		<Seo title="Page two" />
		<h1>
			{hi}
		</h1>
		<p>
			{welcome}
		</p>
		<Link to="/">
			{goBack}
		</Link>
	</Layout>
)

export default SecondPage
