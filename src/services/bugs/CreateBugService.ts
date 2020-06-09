import { injectable, inject } from 'tsyringe';

import Bug from 'repositories/bugs/typeorm/entities/Bug';
import IBugsRepository from 'repositories/bugs/IBugsRepository';

interface IRequest {
  description: string;
}

@injectable()
class CreateBugService {
  constructor(
    @inject('BugRepository')
    private repository: IBugsRepository,
  ) { }

  public async execute({ description }: IRequest): Promise<Bug> {
    const bug = await this.repository.create({ description });

    return bug;
  }
}

export default CreateBugService;
