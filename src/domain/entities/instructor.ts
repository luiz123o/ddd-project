import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity.id";

interface IInstructor {
  name: string;
}

export class Instructor extends Entity<IInstructor> {
  static create(props: IInstructor, id?: UniqueEntityID) {
    return new Instructor(props, id);
  }
}
