import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../static/favicon.ico';

class Seo extends Component {

	static defaultProps = {
		description: ``,
		keywords: [],
		lang: `en`,
		meta: [],
	}

	static propTypes = {
		description: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
		lang: PropTypes.string,
		meta: PropTypes.arrayOf(PropTypes.string),
		title: PropTypes.string.isRequired,
	}

	constructor ( props ) {
		super( props );
	}

	render () {
		const { description, keywords, lang, meta, title } = this.props;

		return (
			<StaticQuery
				query={detailsQuery}
				render={data => {
					const metaDescription = description || data.site.siteMetadata.description;
					return (
						<Helmet
							htmlAttributes={{
								lang,
							}}
							link={[
								{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
							]}
							meta={[
								{
									name: `description`,
									content: metaDescription,
								},
								{
									property: `og:title`,
									content: title,
								},
								{
									property: `og:description`,
									content: metaDescription,
								},
								{
									property: `og:type`,
									content: `website`,
								},
								{
									name: `twitter:card`,
									content: `summary`,
								},
								{
									name: `twitter:creator`,
									content: data.site.siteMetadata.author,
								},
								{
									name: `twitter:title`,
									content: title,
								},
								{
									name: `twitter:description`,
									content: metaDescription,
								},
							]
								.concat(
									keywords.length > 0
										? {
											name: `keywords`,
											content: keywords.join(`, `),
										}
										: []
								)
								.concat(meta)}
							title={title}
							titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						>
							<script>
								{`(() => {
    								let e = document.createElement('script');
										e.type = 'text/javascript';
										e.id = 'twitter-script';
										e.src = '//platform.twitter.com/widgets.js';
										e.defer = true;
										let script = document.getElementsByTagName('script')[0];
										script.parentNode.insertBefore(e, script);
								
								
										e = document.createElement('script');
										e.type = 'text/javascript';
										e.id = 'vine-script';
										e.src = '//platform.vine.co/static/scripts/embed.js';
										e.defer = true;
										script = document.getElementsByTagName('script')[0];
										script.parentNode.insertBefore(e, script);
								
										e = document.createElement('script');
										e.type = 'text/javascript';
										e.id = 'code-pen-script';
										e.src = '//codepen.io/assets/embed/ei.js';
										e.defer = true;
										script = document.getElementsByTagName('script')[0];
										script.parentNode.insertBefore(e, script);
								})()`}
							</script>
						</Helmet>
					)
				}}
			/>
		);
	}
}

export default Seo;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                author
								description
            }
        }
    }
`
