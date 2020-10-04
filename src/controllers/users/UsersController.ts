import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from 'services/users/CreateUserService';
import DeleteUserService from 'services/users/DeleteUserService';
import FindAllUserService from 'services/users/FindAllUserService';
import FindUserService from 'services/users/FindUserService';
import UpdateUserService from 'services/users/UpdateUserService';

class UsersController {
  public async all(_: Request, response: Response): Promise<Response> {
    const findAllUserService = container.resolve(FindAllUserService);

    const user = await findAllUserService.execute();

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, username, password, role, isAdmin } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      username,
      password,
      role,
      isAdmin,
    });

    return response.json(user);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUserService = container.resolve(FindUserService);

    const user = await findUserService.execute(id);

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, username, password, role, isAdmin } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    const user = await updateUserService.execute({
      id,
      userData: {
        name,
        username,
        password,
        role,
        isAdmin,
      },
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = container.resolve(DeleteUserService);

    const user = await deleteUserService.execute({ id });

    return response.json(user);
  }
}

export default UsersController;
