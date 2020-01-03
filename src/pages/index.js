import React, { useEffect } from 'react';
import { useNetworkAvailability } from 'web-api-hooks';
import NetworkStatus from '../components/NetworkStatus';

/**
 * online/offline taken from https://github.com/chrisbolin/react-detect-offline
 */

const IndexPage = () => {
  const isOnline = useNetworkAvailability();

  useEffect(() => {
    document.documentElement.classList[isOnline ? 'remove' : 'add']('offline');
  }, [isOnline]);

  return (
    <Fragment>
      <NetworkStatus isOnline={isOnline} />
      <h2>Michael</h2>
      <h1>Fitzpatrick</h1>
    </Fragment>
  )
};

export default IndexPage
