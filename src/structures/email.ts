import { tags } from "typia";

/**
 * Email
 *
 * @title Email
 */
export type email = {
  email: string &
    tags.Format<"email"> &
    tags.JsonSchemaPlugin<{
      example: "octocat@github.com";
    }>;
  primary: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  verified: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  visibility:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "public";
        }>)
    | null;
};
