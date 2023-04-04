import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product:
      'https://1124imk14c.execute-api.us-east-1.amazonaws.com/products/1',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: false,
    cart: false,
  },
};
