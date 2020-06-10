import { injectable, inject } from 'tsyringe';

import IInspectionsRepository from 'repositories/inspections/IInspectionsRepository';
import Inspection from 'repositories/inspections/typeorm/entities/Inspection';

@injectable()
class FindInspectionService {
  constructor(
    @inject('InspectionRepository')
    private repository: IInspectionsRepository,
  ) { }

  public async execute(id: string): Promise<Inspection | undefined> {
    const inspection = await this.repository.find(id);

    return inspection;
  }
}

export default FindInspectionService;
