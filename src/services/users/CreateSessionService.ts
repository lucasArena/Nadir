import { injectable, inject } from 'tsyringe';

import IUserRepository from '../../repositories/users/IUserRepository';
import IWebTokenProvider from '../../providers/users/IWebToken/IWebTokenProvider';
import IHashProvider from '../../providers/users/IHashProvider/IHashProvider';

import User from '../../repositories/users/typeorm/entities/User';
import AppError from '../../shared/errors/AppError';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UserRepository')
    private repository: IUserRepository,
    @inject('BcryptHashProvider')
    private hashProvider: IHashProvider,
    @inject('JsonWebTokenProvider')
    private tokenProvider: IWebTokenProvider,
  ) { }

  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.repository.findByUsername(username);

    if (!user) {
      throw new AppError('username/password does not exists', 401);
    }

    const passwordMatched = this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('username/password does not exists', 401);
    }

    const token = this.tokenProvider.generateToken(user.id);

    return { user, token };
  }
}

export default CreateSessionService;
