import User from './typeorm/entities/User';
import IUser from '../../dtos/users/IUser';

export default interface IUserRepository {
  findAll(): Promise<User[] | undefined>;
  save(userData: IUser): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  deleteById(id: string): Promise<User | undefined>;
}
