import { Specification } from "../model/Specification";

interface ISpecficationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ISpecficationDTO): void;
  list(): Specification[];
  findBySpecification({ name }: Pick<ISpecficationDTO, "name">): Specification;
}

export { ISpecficationDTO, ISpecificationRepository };
