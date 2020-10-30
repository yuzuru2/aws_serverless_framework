import React from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  return <Component {...pageProps} />;
};
