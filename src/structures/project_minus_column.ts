import { tags } from "typia";

/**
 * Project columns contain cards of work.
 *
 * @title Project Column
 */
export type project_minus_column = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/columns/367";
    }>;
  project_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/120";
    }>;
  cards_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/columns/367/cards";
    }>;
  /**
   * The unique identifier of the project column
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEzOlByb2plY3RDb2x1bW4zNjc=";
    }>;
  /**
   * Name of the project column
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Remaining tasks";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-09-05T14:18:44Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-09-05T14:22:28Z";
    }>;
};
