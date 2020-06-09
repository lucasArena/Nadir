import User from './typeorm/entities/User';
import ICreateDTO from '../../dtos/users/ICreateDTO';

export default interface IUserRepository {
  findAll(): Promise<User[] | undefined>;
  create(userData: ICreateDTO): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  update(id: string, userData: ICreateDTO): Promise<User | undefined>;
  deleteById(id: string): Promise<User | undefined>;
}
