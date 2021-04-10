import { createCategoryController } from "@src/modules/cars/useCases/createCategory";
import { Router } from "express";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

export { categoriesRoutes };
