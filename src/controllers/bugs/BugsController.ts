import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAllBugService from 'services/bugs/FindAllBugService';
import CreateBugService from 'services/bugs/CreateBugService';
import UpdateBugService from 'services/bugs/UpdateBugService';
import FindBugService from 'services/bugs/FindBugService';
import DeleteBugService from 'services/bugs/DeleteBugService';

class SessionsController {
  public async index(_: Request, response: Response): Promise<Response> {
    const findAllBugService = container.resolve(FindAllBugService);
    const bugs = await findAllBugService.execute();

    return response.json(bugs);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const createBugService = container.resolve(CreateBugService);
    const bug = await createBugService.execute({ description });

    return response.json(bug);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { id } = request.params;
    const updateBugService = container.resolve(UpdateBugService);
    const bug = await updateBugService.execute(id, { description });

    return response.json(bug);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findBugService = container.resolve(FindBugService);
    const bug = await findBugService.execute(id);

    return response.json(bug);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteBugService = container.resolve(DeleteBugService);
    const bug = await deleteBugService.execute(id);

    return response.json(bug);
  }
}

export default SessionsController;
