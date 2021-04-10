import { SpecificationsRepository } from "../../repositories/implementations/SpecificatonsRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationsService } from "./ListSpecificationsService";

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsService = new ListSpecificationsService(
  specificationsRepository
);

const listSpecificationsController = new ListSpecificationController(
  listSpecificationsService
);

export { listSpecificationsController };
