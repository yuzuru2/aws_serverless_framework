import * as AWS from 'aws-sdk';

import Constant from '../constant';

AWS.config.update({
  ...{
    region: 'ap-northeast-1',
  },
  ...(process.env.NODE_ENV !== 'production'
    ? {
        endpoint: 'http://localhost:8088',
        credentials: new AWS.Credentials('dummy', 'dummy'),
      }
    : {}),
} as any);

const client = new AWS.DynamoDB.DocumentClient();
export default client;
