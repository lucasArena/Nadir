import ICreateDTO from 'dtos/users/ICreateDTO';
import IUserRepository from 'repositories/users/IUserRepository';
import { injectable, inject } from 'tsyringe';
import User from 'repositories/users/typeorm/entities/User';
import AppError from 'shared/errors/AppError';
import IHashProvider from 'providers/users/IHashProvider/IHashProvider';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository,
    @inject('BcryptHashProvider')
    private hashProvider: IHashProvider,
  ) { }

  public async execute({
    name,
    username,
    role,
    isAdmin,
    password,
  }: ICreateDTO): Promise<User | undefined> {
    const userExists = await this.repository.findByUsername(username);

    if (userExists) {
      throw new AppError('Username already exists', 400);
    }

    const hashPassword = await this.hashProvider.generateHash(password);

    const user = await this.repository.create({
      name,
      username,
      role,
      isAdmin,
      password: hashPassword,
    });

    if (user) {
      delete user.password;
    }

    return user;
  }
}

export default CreateUserService;
