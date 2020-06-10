import { container } from 'tsyringe';

import IHashProvider from './IHashProvider/IHashProvider';
import BCryptHashProvider from './IHashProvider/BCryptHashProvider';
import IWebTokenProvider from './IWebToken/IWebTokenProvider';
import JsonWebTokenProvider from './IWebToken/JsonWebTokenProvider';

container.registerSingleton<IHashProvider>(
  'BcryptHashProvider',
  BCryptHashProvider,
);

container.registerSingleton<IWebTokenProvider>(
  'JsonWebTokenProvider',
  JsonWebTokenProvider,
);
