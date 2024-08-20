import { tags } from "typia";

/**
 * Check Annotation
 *
 * @title Check Annotation
 */
export type check_minus_annotation = {
  path: string &
    tags.JsonSchemaPlugin<{
      example: "README.md";
    }>;
  start_line: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  end_line: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  start_column:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 5;
        }>)
    | null;
  end_column:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 10;
        }>)
    | null;
  annotation_level:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "warning";
        }>)
    | null;
  title:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Spell Checker";
        }>)
    | null;
  message:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Check your spelling for 'banaas'.";
        }>)
    | null;
  raw_details:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Do you mean 'bananas' or 'banana'?";
        }>)
    | null;
  blob_href: string;
};
