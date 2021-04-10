import { createSpecificationController } from "@src/modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "@src/modules/cars/useCases/listSpecications";
import { Router } from "express";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});
export { specificationsRoutes };
