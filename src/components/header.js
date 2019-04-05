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
			<header>
				<div>
					<h1>
						<Link
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
