import { useState, useEffect } from 'react';

const goOnline = () => document.documentElement.classList.remove('offline');
const goOffline = () => document.documentElement.classList.add('offline');

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    win
  });

  return isOnline;
}

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
/**
 * online/offline taken from https://github.com/chrisbolin/react-detect-offline
 */

class IndexPage extends Component {
  constructor(props) {
    super(props);

    const online = typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? navigator.onLine
      : true
    ;

    if (!online) {
      this.goOffline();
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.goOnline);
      window.addEventListener('offline', this.goOffline);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.goOnline);
      window.addEventListener('offline', this.goOffline);
    }
  }

  goOnline = () => {
    document.documentElement.classList.remove('offline');
  };

  goOffline = () => {
    document.documentElement.classList.add('offline');
  };

  render() {
    return (
      <Fragment>
        <NetworkStatus isOnline={i}/>
        <h2>Michael</h2>
        <h1>Fitzpatrick</h1>
      </Fragment>
    )
  }
}

export default IndexPage
