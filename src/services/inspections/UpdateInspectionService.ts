import { injectable, inject } from 'tsyringe';
import IInspectionsRepository from 'repositories/inspections/IInspectionsRepository';
import ICreateInspectionsDTO from 'dtos/inspections/ICreateInspectionsDTO';
import IMachineRepository from 'repositories/machines/IMachineRepository';
import IUserRepository from 'repositories/users/IUserRepository';
import AppError from 'shared/errors/AppError';
import Inspection from 'repositories/inspections/typeorm/entities/Inspection';

@injectable()
class UpdateInspectionService {
  constructor(
    @inject('InspectionRepository')
    private inspectionRepository: IInspectionsRepository,
    @inject('MachineRepository')
    private machineRepository: IMachineRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) { }

  public async execute(
    id: string,
    inspectionData: ICreateInspectionsDTO,
  ): Promise<Inspection> {
    const {
      user_id,
      machine_id,
      tag,
      palconstLength,
      statusPalconst,
      article,
      amountParts,
      amountSamples,
      bugs,
    } = inspectionData;

    const userExists = await this.userRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User does not exists', 400);
    }

    const machineExists = await this.machineRepository.findById(machine_id);

    if (!machineExists) {
      throw new AppError('Machine does not exists', 400);
    }

    const inspection = await this.inspectionRepository.update(id, {
      user_id,
      machine_id,
      tag,
      palconstLength,
      statusPalconst,
      article,
      amountSamples,
      amountParts,
      bugs,
    });

    return inspection;
  }
}

export default UpdateInspectionService;
