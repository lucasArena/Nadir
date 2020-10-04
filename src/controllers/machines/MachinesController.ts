import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAllMachineService from 'services/machines/FindAllMachineService';
import FindOneMachineService from 'services/machines/FindOneMachineService';
import CreateMachineService from 'services/machines/CreateMachineService';
import DeleteMachineService from 'services/machines/DeleteMachineService';
import UpdateMachineService from 'services/machines/UpdateMachineService';

class MachinesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAllMachineService = container.resolve(FindAllMachineService);

    const machines = await findAllMachineService.execute(id);

    return response.json(machines);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findAllMachineService = container.resolve(FindOneMachineService);

    const machine = await findAllMachineService.execute(id);

    return response.json(machine);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, velocity } = request.body;

    const createMachineService = container.resolve(CreateMachineService);

    const machine = await createMachineService.execute({ name, velocity });

    return response.json(machine);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, velocity } = request.body;
    const { id } = request.params;

    const updateMachineService = container.resolve(UpdateMachineService);

    const machine = await updateMachineService.execute(id, { name, velocity });

    return response.json(machine);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const createMachineService = container.resolve(DeleteMachineService);

    const machine = await createMachineService.execute(id);

    return response.json(machine);
  }
}

export default MachinesController;
