import { injectable, inject } from 'tsyringe';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import Machine from 'repositories/machines/typeorm/entities/Machine';

@injectable()
class DeleteMachineService {
  constructor(
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
  ) { }

  public async execute(id: string): Promise<Machine> {
    const machine = await this.machineRepository.remove(id);

    return machine;
  }
}

export default DeleteMachineService;
