import { injectable, inject, container } from 'tsyringe';

import IBugsRepository from 'repositories/bugs/IBugsRepository';
import Bug from 'repositories/bugs/typeorm/entities/Bug';

interface IRequest {
  description: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('BugRepository')
    private repository: IBugsRepository,
  ) { }

  public async execute({ description }: IRequest): Promise<Bug> {
    const bug = await this.repository.create({ description });

    return bug;
  }
}

export default CreateSessionService;
