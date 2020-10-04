import { injectable, inject } from 'tsyringe';
import IUserRepository from 'repositories/users/IUserRepository';
import AppError from 'shared/errors/AppError';

import IUser from 'dtos/users/IUser';
import User from '../../repositories/users/typeorm/entities/User';

interface IRequest {
  id: string;
  userData: IUser;
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

    const usernameExists = await this.repository.findByUsername(
      userData.username,
    );

    if (usernameExists && usernameExists.id !== id) {
      throw new AppError('Username already exists', 400);
    }

    const user = await this.repository.save({ id, ...userData });

    return user;
  }
}

export default UpdateUserService;
