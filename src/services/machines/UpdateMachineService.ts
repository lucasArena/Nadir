import { injectable, inject } from 'tsyringe';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import Machine from 'repositories/machines/typeorm/entities/Machine';
import AppError from 'shared/errors/AppError';
import IMachine from 'dtos/machines/IMachine';

@injectable()
class UpdateMachineService {
  constructor(
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
  ) { }

  public async execute(id: string, machineData: IMachine): Promise<Machine> {
    const { name, velocity } = machineData;

    const machineExists = await this.machineRepository.findById(id);

    if (!machineExists) {
      throw new AppError('Machine does not exists', 400);
    }

    const machine = await this.machineRepository.save({ id, name, velocity });

    return machine;
  }
}

export default UpdateMachineService;
