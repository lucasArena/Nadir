import IMachine from 'dtos/machines/IMachine';
import Machine from './typeorm/entities/Machine';

export default interface IMachineRepository {
  save(machineData: IMachine): Promise<Machine>;
  findAll(): Promise<Machine[]>;
  findById(id: string): Promise<Machine>;
  remove(id: string): Promise<Machine>;
}
