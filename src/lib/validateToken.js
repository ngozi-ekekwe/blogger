import { verify } from 'jsonwebtoken';
import Settings from '../config/settings';

// const JWT_SECRET = Settings.jwtSecret;
const JWT_SECRET = 'secret';

export const verifyToken = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    verify(token, JWT_SECRET, (error, decoded) => {
      if (error) {
        return 'invalid token'
      } else {
        return decoded;
        // request.decoded = decoded;
        // next();
      }
    });
  } else {
    'Token required to access this route'
  }
};
