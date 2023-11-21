import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity.id";
import { Optional } from "@/core/types/optional";

interface IAnswer {
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Answer extends Entity<IAnswer> {
  get authorId() {
    return this.props.authorId;
  }

  get questionId() {
    return this.props.questionId;
  }

  get content() {
    return this.props.content;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get excerpt() {
    return this.props.content
    .substring(0, 120)
    .trimEnd()
    .concat('...');
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set content(value: string) {
    this.props.content = value;
    this.touch()
  }
  
  static create(props: Optional<IAnswer, 'createdAt'>, id?: UniqueEntityID) {
    return new Answer({ ...props, createdAt: new Date() }, id);
  }
}
