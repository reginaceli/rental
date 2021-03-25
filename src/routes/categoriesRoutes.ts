import { CategoriesRepository } from "@src/repositories/CategoriesRepository";
import { Router } from "express";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByCategory({ name });

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists." });
  }

  categoriesRepository.create({ name, description });

  response.status(201).send();
});

categoriesRoutes.get("/", (_, response) => {
  const all = categoriesRepository.list();

  response.status(200).json(all);
});

export { categoriesRoutes };
