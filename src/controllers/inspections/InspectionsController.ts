import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateInspectionService from '../../services/inspections/CreateInspectionService';
import UpdateInspectionService from '../../services/inspections/UpdateInspectionService';
import FindAllInspectionService from '../../services/inspections/FindAllInspectionService';
import FindInspectionService from '../../services/inspections/FindInspectionService';
import DeleteInspectionService from '../../services/inspections/DeleteInspectionService';

class InspectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllInspectionService = container.resolve(
      FindAllInspectionService,
    );

    const inspections = await findAllInspectionService.execute();

    return response.json(inspections);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findInspectionService = container.resolve(FindInspectionService);

    const inspection = await findInspectionService.execute(id);

    return response.json(inspection);
  }

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

  public async update(request: Request, response: Response): Promise<Response> {
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

    const { id } = request.params;

    const updateInspectionService = container.resolve(UpdateInspectionService);

    const inspections = await updateInspectionService.execute(id, {
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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteInspectionService = container.resolve(DeleteInspectionService);

    const inspection = await deleteInspectionService.execute(id);

    return response.json(inspection);
  }
}

export default InspectionsController;
