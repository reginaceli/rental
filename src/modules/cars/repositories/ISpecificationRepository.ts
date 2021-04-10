import { Specification } from "../model/Specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ISpecificationDTO): void;

  list(): Specification[];

  findBySpecification({ name }: Pick<ISpecificationDTO, "name">): boolean;
}

export { ISpecificationRepository, ISpecificationDTO };
