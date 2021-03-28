import { SpecificationsRepository } from "@src/modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "@src/modules/cars/services/CreateSpecfitionService";
import { Router } from "express";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const specificationService = new CreateSpecificationService(
    specificationRepository
  );

  specificationService.execute({ name, description });

  response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  const all = specificationRepository.list();
  response.status(200).json(all);
});

export { specificationsRoutes };
