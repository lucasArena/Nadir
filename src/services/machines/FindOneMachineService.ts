import { injectable, inject } from 'tsyringe';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import Machine from 'repositories/machines/typeorm/entities/Machine';

@injectable()
class FindOneMachineService {
  constructor(
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
  ) { }

  public async execute(id: string): Promise<Machine> {
    const machine = await this.machineRepository.findById(id);

    return machine;
  }
}

export default FindOneMachineService;
