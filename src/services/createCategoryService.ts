import { ICategoryRepository } from "@src/repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByCategory({
      name,
    });

    if (categoryAlreadyExists) {
      throw new Error("Category already exists.");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
