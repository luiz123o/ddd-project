import { Slug } from "./value-objects/slug";
import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity.id";
import { Optional } from "@/core/types/optional";
import dayjs from "dayjs";

export interface IQuestion {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  content: string;
  slug: Slug;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<IQuestion> {
  get authorId() {
    return this.props.authorId;
  }

  get bestAnswerId() {
    return this.props.bestAnswerId;
  }

  get slug() {
    return this.props.slug;
  }

  get title() {
    return this.props.title;
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

  get isNew() {
    return dayjs().diff(this.props.createdAt, "day") <= 3;
  }

  get excerpt() {
    return this.props.content.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set title(value: string) {
    this.props.title = value;
    this.props.slug = Slug.createFromText(value);
    this.touch();
  }

  set content(value: string) {
    this.props.content = value;
    this.touch();
  }

  set bestAnswerId(value: UniqueEntityID | undefined) {
    this.props.bestAnswerId = value;
    this.touch();
  }

  static create(
    props: Optional<IQuestion, "createdAt" | "slug">,
    id?: UniqueEntityID
  ) {
    return new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id
    );
  }
}
