import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsService };
