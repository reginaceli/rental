import {
  ICategoryRepository,
  ICategoryDTO,
} from "@src/modules/cars/repositories/ICategoryRepository";

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: ICategoryDTO): void {
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
