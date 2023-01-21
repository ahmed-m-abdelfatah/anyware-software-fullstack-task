import { default as jwt } from 'jsonwebtoken';

export const verifyToken = token => {
  const decoded = jwt.decode(token);
  return decoded?.isSignedIn === true;
};

export const isTokenStillValid = token => {
  const decoded = jwt.decode(token);
  const future = decoded.jwtExpiration;
  const current = Math.floor(Date.now() / 1000);
  return future > current;
};
