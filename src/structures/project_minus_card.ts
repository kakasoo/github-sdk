import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Project cards represent a scope of work.
 *
 * @title Project Card
 */
export type project_minus_card = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/columns/cards/1478";
    }>;
  /**
   * The project card's ID
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
      format: "int64";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDExOlByb2plY3RDYXJkMTQ3OA==";
    }>;
  note:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Add payload for delete Project column";
        }>)
    | null;
  creator: nullable_minus_simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-09-05T14:21:06Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-09-05T14:20:22Z";
    }>;
  /**
   * Whether or not the card is archived
   */
  archived?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  column_name?: string;
  project_id?: string;
  column_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/columns/367";
    }>;
  content_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/api-playground/projects-test/issues/3";
    }>;
  project_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/120";
    }>;
};
