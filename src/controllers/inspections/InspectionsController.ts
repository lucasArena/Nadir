import { Request, Response } from 'express';

class InspectionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'OK' });
  }
}

export default InspectionsController;
