import { injectable, inject } from 'tsyringe';
import IInspectionsRepository from 'repositories/inspections/IInspectionsRepository';
import ICreateInspectionsDTO from 'dtos/inspections/ICreateInspectionsDTO';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import IUserRepository from 'repositories/users/IUserRepository';
import AppError from 'shared/errors/AppError';
import Inspection from 'repositories/inspections/typeorm/entities/Inspection';

@injectable()
class DeleteInspectionService {
  constructor(
    @inject('InspectionRepository')
    private inspectionRepository: IInspectionsRepository,
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) { }

  public async execute(id: string): Promise<Inspection | undefined> {
    const inspectionExists = await this.inspectionRepository.find(id);

    if (!inspectionExists) {
      throw new AppError('Inspection does not exists', 400);
    }

    const inspection = await this.inspectionRepository.delete(id);

    return inspection;
  }
}

export default DeleteInspectionService;
