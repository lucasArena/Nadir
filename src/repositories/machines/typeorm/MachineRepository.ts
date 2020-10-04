import { getRepository, EntityRepository, Repository } from 'typeorm';

import AppError from 'shared/errors/AppError';
import IMachine from 'dtos/machines/IMachine';
import IMachineRepository from '../IMachineRepository';
import Machine from './entities/Machine';

@EntityRepository(Machine)
class MachineRepository implements IMachineRepository {
  private repository: Repository<Machine>;

  constructor() {
    this.repository = getRepository(Machine);
  }

  async save(machineData: IMachine): Promise<Machine> {
    const machine = this.repository.create(machineData);
    console.log(machine);
    await this.repository.save(machine);

    return machine;
  }

  async findAll(): Promise<Machine[]> {
    const machines = await this.repository.find();

    return machines;
  }

  async findById(id: string): Promise<Machine> {
    const machine = await this.repository.findOne(id);

    if (!machine) {
      throw new AppError('Machine does not exists', 400);
    }

    return machine;
  }

  async remove(id: string): Promise<Machine> {
    const machine = await this.repository.findOne(id);

    if (!machine) {
      throw new AppError('Machine does not exists', 400);
    }

    await this.repository.delete(id);

    return machine;
  }
}

export default MachineRepository;
