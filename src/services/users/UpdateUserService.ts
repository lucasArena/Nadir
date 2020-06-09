import { injectable, inject } from 'tsyringe';
import IUserRepository from 'repositories/users/IUserRepository';
import AppError from 'shared/errors/AppError';

import ICreateDTO from 'dtos/users/ICreateDTO';
import User from '../../repositories/users/typeorm/entities/User';

interface IRequest {
  id: string;
  userData: ICreateDTO;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository,
  ) { }

  public async execute({ id, userData }: IRequest): Promise<User | undefined> {
    const userExists = await this.repository.findById(id);

    if (!userExists) {
      throw new AppError('User does not exists', 401);
    }

    const user = await this.repository.update(id, userData);

    return user;
  }
}

export default UpdateUserService;
