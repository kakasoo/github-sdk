import { tags } from "typia";

/**
 * Content Traffic
 *
 * @title Content Traffic
 */
export type content_minus_traffic = {
  path: string &
    tags.JsonSchemaPlugin<{
      example: "/github/hubot";
    }>;
  title: string &
    tags.JsonSchemaPlugin<{
      example: "github/hubot: A customizable life embetterment robot.";
    }>;
  count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3542;
    }>;
  uniques: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2225;
    }>;
};
