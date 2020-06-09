import { injectable, inject } from 'tsyringe';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import Machine from 'repositories/machines/typeorm/entities/Machine';

@injectable()
class FindAllMachineService {
  constructor(
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
  ) { }

  public async execute(): Promise<Machine[]> {
    const machines = await this.machineRepository.findAll();

    return machines;
  }
}

export default FindAllMachineService;
