import ICreateInspectionsDTO from '../../dtos/inspections/ICreateInspectionsDTO';
import Inspection from './typeorm/entities/Inspection';

export default interface IInspectionsRepository {
  create(inspectionData: ICreateInspectionsDTO): Promise<Inspection>;
  update(
    id: string,
    inspectionData: ICreateInspectionsDTO,
  ): Promise<Inspection>;
  index(): Promise<Inspection[]>;
  find(id: string): Promise<Inspection | undefined>;
  delete(id: string): Promise<Inspection | undefined>;
}
