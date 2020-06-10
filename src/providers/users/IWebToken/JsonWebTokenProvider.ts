import { sign } from 'jsonwebtoken';

import IWebTokenProvider from './IWebTokenProvider';

import authConfig from '../../../config/auth';

class JsonWebTokenProvider implements IWebTokenProvider {
  generateToken(userId: string): string {
    const token = sign({}, authConfig.secret, {
      subject: userId,
      expiresIn: authConfig.expiresIn,
    });

    return token;
  }
}

export default JsonWebTokenProvider;
