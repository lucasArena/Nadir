import { injectable, inject } from 'tsyringe';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import Machine from 'repositories/machines/typeorm/entities/Machine';
import ICreateDTO from 'dtos/machines/ICreateDTO';

@injectable()
class CreateMachineService {
  constructor(
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
  ) { }

  public async execute(machineData: ICreateDTO): Promise<Machine> {
    const { name, velocity } = machineData;

    const machine = await this.machineRepository.create({ name, velocity });

    return machine;
  }
}

export default CreateMachineService;
