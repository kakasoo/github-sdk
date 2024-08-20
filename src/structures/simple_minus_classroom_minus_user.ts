import { tags } from "typia";

/**
 * A GitHub user simplified for Classroom.
 *
 * @title Simple Classroom User
 */
export type simple_minus_classroom_minus_user = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  login: string &
    tags.JsonSchemaPlugin<{
      example: "octocat";
    }>;
  avatar_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/images/error/octocat_happy.gif";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat";
    }>;
};
