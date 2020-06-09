import { container } from 'tsyringe';

import IUsersRepository from '../../repositories/users/IUserRepository';
import UserRepository from '../../repositories/users/typeorm/UserRepository';

import MachineRepository from '../../repositories/machines/typeorm/MachineRepository';
import IMachineRepository from '../../repositories/machines/IMachineRepository';

import BugRepository from '../../repositories/bugs/typeorm/BugRepository';
import IBugsRepository from '../../repositories/bugs/IBugsRepository';

import '../../providers';

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository);
container.registerSingleton<IBugsRepository>('BugRepository', BugRepository);
container.registerSingleton<IMachineRepository>(
  'MachineRepository',
  MachineRepository,
);
