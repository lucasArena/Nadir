import { getRepository, Repository, EntityRepository } from 'typeorm';
import ICreateBugDTO from 'dtos/bugs/ICreateBugDTO';
import IBugsRepository from '../IBugsRepository';
import Bug from './entities/Bug';

@EntityRepository(Bug)
class BugRepository implements IBugsRepository {
  private orm: Repository<Bug>;

  constructor() {
    this.orm = getRepository(Bug);
  }

  async index(): Promise<Bug[]> {
    const bugs = await this.orm.find();

    return bugs;
  }

  async find(id: string): Promise<Bug | undefined> {
    const bug = await this.orm.findOne(id);

    return bug;
  }

  async create({ description }: ICreateBugDTO): Promise<Bug> {
    const bug = this.orm.create({ description });

    await this.orm.save(bug);

    return bug;
  }

  async update(id: string, bugData: ICreateBugDTO): Promise<Bug> {
    const bug = await this.orm.save({ id, ...bugData });

    return bug;
  }

  async delete(id: string): Promise<Bug | undefined> {
    const bug = await this.orm.findOne(id);

    await this.orm.delete(id);

    return bug;
  }
}

export default BugRepository;
