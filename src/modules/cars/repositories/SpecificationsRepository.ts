import { Specification } from "../model/Specification";
import {
  ISpecficationDTO,
  ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecficationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findBySpecification({ name }: Pick<ISpecficationDTO, "name">): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    if (!specification) {
      throw new Error("Specification not found");
    }

    return specification;
  }
}

export { SpecificationsRepository };
