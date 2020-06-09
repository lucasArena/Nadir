import { injectable, inject } from 'tsyringe';

import Bug from 'repositories/bugs/typeorm/entities/Bug';
import IBugsRepository from 'repositories/bugs/IBugsRepository';

@injectable()
class FindAllBugService {
  constructor(
    @inject('BugRepository')
    private repository: IBugsRepository,
  ) { }

  public async execute(): Promise<Bug[] | undefined> {
    const bugs = await this.repository.index();

    return bugs;
  }
}

export default FindAllBugService;
