import { injectable, inject } from 'tsyringe';
import IUserRepository from 'repositories/users/IUserRepository';
import AppError from 'shared/errors/AppError';

import User from '../../repositories/users/typeorm/entities/User';

interface IRequest {
  id: string;
}

@injectable()
class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<User | undefined> {
    const userExists = await this.repository.findById(id);

    if (!userExists) {
      throw new AppError('User does not exists', 401);
    }

    const user = await this.repository.deleteById(id);

    return user;
  }
}

export default DeleteUserService;
