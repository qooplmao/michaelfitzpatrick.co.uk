import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        top: '45vh'
      }}
    >
      <h2>Michael</h2>
      <h1>Fitzpatrick</h1>
    </div>
  </Layout>
);

export default IndexPage
