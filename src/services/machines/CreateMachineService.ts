import { injectable, inject } from 'tsyringe';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import Machine from 'repositories/machines/typeorm/entities/Machine';
import IMachine from 'dtos/machines/IMachine';

@injectable()
class CreateMachineService {
  constructor(
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
  ) { }

  public async execute(machineData: IMachine): Promise<Machine> {
    const { name, velocity } = machineData;

    const machine = await this.machineRepository.save({ name, velocity });

    return machine;
  }
}

export default CreateMachineService;
