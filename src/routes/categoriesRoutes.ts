import { CategoriesRepository } from "@src/modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "@src/modules/cars/services/CreateCategoryService";
import { Router } from "express";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  response.status(201).send();
});

categoriesRoutes.get("/", (_, response) => {
  const all = categoriesRepository.list();

  response.status(200).json(all);
});

export { categoriesRoutes };
