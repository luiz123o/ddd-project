export class Slug {
  public value: string;
  constructor(value: string) {
    this.value = value;
  }
  /**
   * Receives a string and normalize it as slug
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/_g/, "-")
      .replace(/--/g, "-")
      .replace(/-$/, "");

      return new Slug(slugText);
  }
}
