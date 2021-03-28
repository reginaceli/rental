import { Category } from "@src/model/Category";

import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: Date,
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByCategory({ name }: Pick<ICreateCategoryDTO, "name">): Category {
    const category = this.categories.find((category) => category.name === name);

    if (!category) {
      throw new Error("category not found");
    }

    return category;
  }
}

export { CategoriesRepository };
