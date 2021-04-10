import { SpecificationsRepository } from "../../repositories/implementations/SpecificatonsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController };
