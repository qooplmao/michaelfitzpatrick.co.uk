import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WifiOnIcon from '@material-ui/icons/Wifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';

const Online = () => (
  <Fragment>
    You are online <WifiOnIcon />
  </Fragment>
);
const Offline = () => (
  <Fragment>
    You are offline <WifiOffIcon />
  </Fragment>
);

const NetworkStatus = ({
  isOnline
}) => isOnline ? <Online /> : <Offline />;

NetworkStatus.propTypes = {
  isOnline: PropTypes.bool.isRequired
};

export default NetworkStatus
