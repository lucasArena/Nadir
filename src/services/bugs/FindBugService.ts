import { injectable, inject } from 'tsyringe';

import Bug from 'repositories/bugs/typeorm/entities/Bug';
import IBugsRepository from 'repositories/bugs/IBugsRepository';

@injectable()
class FindBugService {
  constructor(
    @inject('BugRepository')
    private repository: IBugsRepository,
  ) { }

  public async execute(id: string): Promise<Bug | undefined> {
    const bug = await this.repository.find(id);

    return bug;
  }
}

export default FindBugService;
