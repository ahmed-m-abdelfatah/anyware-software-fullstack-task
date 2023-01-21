import { default as jwt } from 'jsonwebtoken';
import { useEffect } from 'react';
import { getFromStorage, keys, removeFromStorage } from './browser_storage/local_storage.js';

export const verifyToken = token => {
  const decoded = jwt.decode(token);
  return decoded?.isSignedIn === true;
};

export const isTokenStillValid = () => {
  const token = getFromStorage(keys.token);
  const decoded = jwt.decode(token);
  const future = decoded.jwtExpiration;
  const current = Math.floor(Date.now() / 1000);
  return future > current;
};

// export const checkTokenValid = () => {
//   return () => {
//     useEffect(() => {
//       if (isTokenStillValid() === false) {
//         // remove token
//         removeFromStorage(keys.token);
//       }
//     }, []);
//   };
// };
