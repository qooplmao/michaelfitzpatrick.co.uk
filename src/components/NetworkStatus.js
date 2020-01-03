import React from 'react';
import PropTypes from 'prop-types';

import WifiOnIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';

const Online = () => (
  <WifiOnIcon style={{
    color: '#fff'
  }} />
);
const Offline = () => (
  <WifiOffIcon style={{
    color: '#000'
  }} />
);

const NetworkStatus = ({
  isOnline
}) => (
  <div className="network_status">
    {isOnline ? <Online /> : <Offline />}
  </div>
);

NetworkStatus.propTypes = {
  isOnline: PropTypes.bool.isRequired
};

export default NetworkStatus
