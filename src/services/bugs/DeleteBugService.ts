import { injectable, inject } from 'tsyringe';
import AppError from 'shared/errors/AppError';

import IBugsRepository from 'repositories/bugs/IBugsRepository';
import Bug from 'repositories/bugs/typeorm/entities/Bug';

@injectable()
class DeleteBugService {
  constructor(
    @inject('BugRepository')
    private repository: IBugsRepository,
  ) { }

  public async execute(id: string): Promise<Bug | undefined> {
    const bugExists = await this.repository.find(id);

    if (!bugExists) {
      throw new AppError('Bug does not exists', 401);
    }

    const bug = await this.repository.delete(id);

    return bug;
  }
}

export default DeleteBugService;
