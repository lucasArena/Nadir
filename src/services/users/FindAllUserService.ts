import { injectable, inject } from 'tsyringe';
import IUserRepository from 'repositories/users/IUserRepository';
import AppError from 'shared/errors/AppError';

import User from '../../repositories/users/typeorm/entities/User';

@injectable()
class FindAllUserService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository,
  ) { }

  public async execute(): Promise<User[] | undefined> {
    const users = await this.repository.findAll();

    return users;
  }
}

export default FindAllUserService;
