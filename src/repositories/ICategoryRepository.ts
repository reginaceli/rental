import { Category } from "@src/model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByCategory({ name }: Pick<ICreateCategoryDTO, "name">): Category;
}

export { ICategoryRepository, ICreateCategoryDTO };
