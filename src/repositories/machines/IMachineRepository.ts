import ICreateDTO from 'dtos/machines/ICreateDTO';
import Machine from './typeorm/entities/Machine';

export default interface IMachineRepository {
  create(machineData: ICreateDTO): Promise<Machine>;
  findAll(): Promise<Machine[]>;
  findById(id: string): Promise<Machine>;
  remove(id: string): Promise<Machine>;
}
