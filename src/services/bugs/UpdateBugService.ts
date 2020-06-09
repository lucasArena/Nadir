import { injectable, inject } from 'tsyringe';

import Bug from 'repositories/bugs/typeorm/entities/Bug';
import IBugsRepository from 'repositories/bugs/IBugsRepository';
import ICreateBugDTO from 'dtos/bugs/ICreateBugDTO';
import AppError from 'shared/errors/AppError';

@injectable()
class UpdateBugService {
  constructor(
    @inject('BugRepository')
    private repository: IBugsRepository,
  ) { }

  public async execute(
    id: string,
    { description }: ICreateBugDTO,
  ): Promise<Bug | undefined> {
    const bugExists = await this.repository.find(id);

    if (!bugExists) {
      throw new AppError('Bug does not exists', 400);
    }

    const bug = await this.repository.update(id, { description });

    return bug;
  }
}

export default UpdateBugService;
