import ICreateBugDTO from 'dtos/bugs/ICreateBugDTO';
import Bug from './typeorm/entities/Bug';

export default interface IBugsRepository {
  index(): Promise<Bug[]>;
  find(id: string): Promise<Bug | undefined>;
  create(bugData: ICreateBugDTO): Promise<Bug>;
  update(id: string, bugData: ICreateBugDTO): Promise<Bug>;
  delete(id: string): Promise<Bug | undefined>;
}
