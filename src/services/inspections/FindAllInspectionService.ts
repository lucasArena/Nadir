import { injectable, inject } from 'tsyringe';

import IInspectionsRepository from 'repositories/inspections/IInspectionsRepository';
import Inspection from 'repositories/inspections/typeorm/entities/Inspection';

@injectable()
class FindAllInspectionService {
  constructor(
    @inject('InspectionRepository')
    private repository: IInspectionsRepository,
  ) { }

  public async execute(): Promise<Inspection[] | undefined> {
    const inpections = await this.repository.index();

    return inpections;
  }
}

export default FindAllInspectionService;
