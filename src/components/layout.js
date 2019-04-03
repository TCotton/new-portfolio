/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './css/reset.css';
import styles from './layout.module.css';

const Gatsby = `Gatsby`;
const built = `Built with`;
const copyright = `©`;

class Layout extends Component {

	static propTypes = {
		children: PropTypes.node.isRequired
	}

	constructor (props) {
		super(props);
	}

	render () {

		const { children } = this.props;

		return (
			<StaticQuery
				query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
				render={data => (
					<React.Fragment>
						<Header siteTitle={data.site.siteMetadata.title} />
						<div
							style={{
								margin: `0 auto`,
								maxWidth: 960,
								padding: `0px 1.0875rem 1.45rem`,
								paddingTop: 0,
							}}
						>
							<main>
								{children}
							</main>
							<footer className={styles.whatever}>
								{copyright}
								{new Date().getFullYear()}
								{built}
								{` `}
								<a href="https://www.gatsbyjs.org">
									{Gatsby}
								</a>
							</footer>
						</div>
					</React.Fragment>
				)}
			/>
		);
	}
}

export default Layout;
