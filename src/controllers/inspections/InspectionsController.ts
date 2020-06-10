import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateInspectionService from 'services/inspections/CreateInspectionService';

class InspectionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      user_id,
      machine_id,
      tag,
      palconstLength,
      statusPalconst,
      article,
      amountSamples,
      amountParts,
      bugs,
    } = request.body;

    const createInspectionService = container.resolve(CreateInspectionService);

    const inspections = await createInspectionService.execute({
      user_id,
      machine_id,
      tag,
      palconstLength,
      statusPalconst,
      article,
      amountParts,
      amountSamples,
      bugs,
    });

    return response.json(inspections);
  }
}

export default InspectionsController;
