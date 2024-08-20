import { tags } from "typia";

/**
 * A GitHub organization.
 *
 * @title Organization Simple for Classroom
 */
export type simple_minus_classroom_minus_organization = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  login: string &
    tags.JsonSchemaPlugin<{
      example: "github";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEyOk9yZ2FuaXphdGlvbjE=";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/github";
    }>;
  name:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "Github - Code thigns happen here";
        }>)
    | null;
  avatar_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/images/error/octocat_happy.gif";
    }>;
};
