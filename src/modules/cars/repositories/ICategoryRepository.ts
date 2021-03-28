import { Category } from "@src/modules/cars/model/Category";

interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create({ name, description }: ICategoryDTO): void;
  list(): Category[];
  findByCategory({ name }: Pick<ICategoryDTO, "name">): Category;
}

export { ICategoryRepository, ICategoryDTO };
