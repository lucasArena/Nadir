import { container } from 'tsyringe';

import IHashProvider from './IHashProvider/IHashProvider';
import BCryptHashProvider from './IHashProvider/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
