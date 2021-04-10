import { Specification } from "../../model/Specification";
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private static instance: SpecificationsRepository;
  private specifications: Specification[];

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository();
    }
    return SpecificationsRepository.instance;
  }

  create({ name, description }: ISpecificationDTO): void {
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

  findBySpecification({ name }: Pick<ISpecificationDTO, "name">): boolean {
    const specification = this.specifications.some(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
