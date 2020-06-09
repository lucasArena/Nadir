import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateSessionService from 'services/users/CreateSessionService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createSessionService = container.resolve(CreateSessionService);

    const { user, token } = await createSessionService.execute({
      username,
      password,
    });

    return response.json({ user, token });
  }
}

export default SessionsController;
