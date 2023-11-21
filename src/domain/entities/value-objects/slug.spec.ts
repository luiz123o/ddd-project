import { expect, test } from "vitest";
import { Slug } from "./slug";


test("it should be able to create new slug from test", () => {
  const slug = Slug.createFromText("An example title");
  expect(slug.value).toBe("an-example-title");
})