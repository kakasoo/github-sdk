import { tags } from "typia";

/**
 * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
 *
 * @title Label
 */
export type label = {
  /**
   * Unique identifier for the label.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 208045946;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDU6TGFiZWwyMDgwNDU5NDY=";
    }>;
  /**
   * URL for the label
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repositories/42/labels/bug";
    }>;
  /**
   * The name of the label.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "bug";
    }>;
  /**
   * Optional description of the label, such as its purpose.
   */
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Something isn't working";
        }>)
    | null;
  /**
   * 6-character hex code, without the leading #, identifying the color
   */
  color: string &
    tags.JsonSchemaPlugin<{
      example: "FFFFFF";
    }>;
  /**
   * Whether this label comes by default in a new repository.
   */
  default: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
