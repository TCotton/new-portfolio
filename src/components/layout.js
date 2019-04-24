/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { connect } from 'react-redux'

import Header from './header';
import Footer from './footer';
import HomePageStats from './homepage-stats';
import './css/variables.css'
import './css/reset.css';
import './css/global.css';
// import styles from './layout.module.css';
import ErrorBoundary from '../helpers/error-boundary';

const Count = `Count: `;
const Increment = `Increment`;

const Counter = ({ count , increment }) => (
	<div>
		<p>
			{Count}
			{count}
		</p>
		<button
			onClick={increment}
			type='button'
		>
			{Increment}
		</button>
	</div>
)

Counter.defaultProps = {
	count: 0,
	increment: 0,
}


Counter.propTypes = {
	count: PropTypes.number,
	increment: PropTypes.func,
}

const mapStateToProps = ({ count }) => {
	return { count }
}

const mapDispatchToProps = dispatch => {
	return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

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
						<div>
							<main>
								{children}
								<ConnectedCounter />
								<HomePageStats />
							</main>
							<div>
								{'container'}
							</div>
							<ErrorBoundary>
								<Footer />
							</ErrorBoundary>
						</div>
					</React.Fragment>
				)}
			/>
		);
	}
}

export default Layout;
