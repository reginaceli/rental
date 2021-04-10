import {
  ISpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/ISpecificationRepository";

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: ISpecificationDTO): void {
    const specificationAlreadExists = this.specificationRepository.findBySpecification(
      { name }
    );

    if (specificationAlreadExists) {
      throw new Error("Specification already exists.");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
