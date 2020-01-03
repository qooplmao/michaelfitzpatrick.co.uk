import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useNetworkAvailability } from 'web-api-hooks';
import NetworkStatus from './NetworkStatus';

import './Layout.css';

const Layout = ({ children }) => {
  const isOnline = useNetworkAvailability();

  useEffect(() => {
    document.documentElement.classList[isOnline ? 'remove' : 'add']('offline');
  }, [isOnline]);

  return (
    <>
      <NetworkStatus isOnline={isOnline} />
      {children}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
