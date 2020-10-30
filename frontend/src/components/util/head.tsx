import * as React from 'react';
import Head from 'next/head';
import Constant from 'src/constant';

export default (params?: { noindex?: boolean; title?: string }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {Constant.title}
          {params?.title ? ` | ${params.title}` : ''}
        </title>
        {params?.noindex ? <meta name="robots" content="noindex" /> : ''}
      </Head>
    </>
  );
};
