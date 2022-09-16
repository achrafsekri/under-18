import Commerce from '@chec/commerce.js';

const publicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY;
const devEnvironment = process.env.NODE_ENV === 'development';

// const commerceConfig = {
//   axiosConfig: {
//     headers: {
//       'X-Chec-Agent': 'commerce.js/v2',
//       'Chec-Version': '2021-09-29',
//     },
//   },
// };

if (devEnvironment && !publicKey) {
  throw Error('Your public API key must be provided');
}

export default new Commerce(
  publicKey,
  devEnvironment,
);