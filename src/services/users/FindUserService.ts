import IUserRepository from 'repositories/users/IUserRepository';
import User from 'repositories/users/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';

@injectable()
class FindUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) { }

  public async execute(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findById(id);

    return user;
  }
}

export default FindUserService;
