import { Category } from "@src/model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
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

  findByCategory({ name }: Pick<ICreateCategoryDTO, "name">): boolean {
    const category = this.categories.some((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
