import {
  ISpecficationDTO,
  ISpecificationRepository,
} from "../repositories/ISpecificationRepository";

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: ISpecficationDTO): void {
    const specificationExists = this.specificationRepository.findBySpecification(
      { name }
    );

    if (specificationExists) {
      throw new Error("Specification already exists.");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
