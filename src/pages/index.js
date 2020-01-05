import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Michael Fitzpatrick - Full Stack PHP Developer" />

    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        top: '45vh'
      }}
    >
      <h1>
        <span>Michael</span>
        <span>Fitzpatrick</span>
      </h1>

      <div className="social_links">
        <a href="https://github.com/qooplmao" target="_blank" rel="noopener noreferrer">
          <GitHubIcon color="primary" />
        </a>
        <a href="https://www.linkedin.com/in/qooplmao" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon color="primary" />
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage
