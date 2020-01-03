import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from './../../static/logo/favicon.ico';

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Michael Fitzpatrick' },
        { name: 'keywords', content: 'michael, fitzpatrick, michaelfitzpatrick, cv, full stack developer, php, react, javascript' },
      ]}
      link={[
        { rel: 'shortcut icon', href: `${favicon}` }
      ]}
    >
      <html lang='en' />
    </Helmet>
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        top: '45vh'
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
