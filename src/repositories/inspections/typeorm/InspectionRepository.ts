import { Repository, getRepository, EntityRepository } from 'typeorm';

import ICreateInspectionsDTO from 'dtos/inspections/ICreateInspectionsDTO';
import IInspectionsRepository from '../IInspectionsRepository';
import Inspection from './entities/Inspection';

@EntityRepository(Inspection)
class InspectionRepository implements IInspectionsRepository {
  private orm: Repository<Inspection>;

  constructor() {
    this.orm = getRepository(Inspection);
  }

  async create(inspectionData: ICreateInspectionsDTO): Promise<Inspection> {
    const {
      user_id,
      machine_id,
      amountParts,
      amountSamples,
      article,
      tag,
      statusPalconst,
      palconstLength,
      bugs,
    } = inspectionData;

    const inspection = this.orm.create({
      user_id,
      machine_id,
      amountParts,
      amountSamples,
      article,
      tag,
      statusPalconst,
      palconstLength,
      bugs,
    });

    await this.orm.save(inspection);

    return inspection;
  }

  async update(
    id: string,
    inspectionData: ICreateInspectionsDTO,
  ): Promise<Inspection> {
    const inspection = await this.orm.save({ id, ...inspectionData });

    return inspection;
  }

  async index(): Promise<Inspection[]> {
    const inspections = await this.orm.find({
      relations: ['bugs', 'user', 'machine'],
    });
    return inspections;
  }

  async find(id: string): Promise<Inspection | undefined> {
    const inspection = await this.orm.findOne(id, {
      relations: ['user', 'machine'],
    });

    return inspection;
  }

  async delete(id: string): Promise<Inspection | undefined> {
    const inspection = await this.orm.findOne(id);
    await this.orm.delete(id);
    return inspection;
  }
}

export default InspectionRepository;
