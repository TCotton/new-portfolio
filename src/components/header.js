import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Header extends Component {

	static propTypes = {
		siteTitle: PropTypes.string,
	}

	static defaultProps = {
		siteTitle: ``,
	}

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate () {
		return true;
	}

	render () {
		const { siteTitle } = this.props;

		return (
			<header
				style={{
					background: `rebeccapurple`,
					marginBottom: `1.45rem`,
				}}
			>
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `1.45rem 1.0875rem`,
					}}
				>
					<h1 style={{ margin: 0 }}>
						<Link
							style={{
								color: `white`,
								textDecoration: `none`,
							}}
							to="/"
						>
							{siteTitle}
						</Link>
					</h1>
				</div>
			</header>
		);
	}
}

export default Header;
