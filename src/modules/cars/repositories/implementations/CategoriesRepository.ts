import { Category } from "@src/modules/cars/model/Category";

import { ICategoryDTO, ICategoryRepository } from "../ICategoryRepository";

class CategoriesRepository implements ICategoryRepository {
  private static instance: CategoriesRepository;
  private categories: Category[];

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.instance) {
      CategoriesRepository.instance = new CategoriesRepository();
    }

    return CategoriesRepository.instance;
  }

  create({ name, description }: ICategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByCategory({ name }: Pick<ICategoryDTO, "name">): boolean {
    const category = this.categories.some((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
