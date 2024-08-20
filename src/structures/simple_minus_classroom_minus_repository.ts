import { tags } from "typia";

/**
 * A GitHub repository view for Classroom
 *
 * @title Simple Classroom Repository
 */
export type simple_minus_classroom_minus_repository = {
  /**
   * A unique identifier of the repository.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1296269;
    }>;
  /**
   * The full, globally unique name of the repository.
   */
  full_name: string &
    tags.JsonSchemaPlugin<{
      example: "octocat/Hello-World";
    }>;
  /**
   * The URL to view the repository on GitHub.com.
   */
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World";
    }>;
  /**
   * The GraphQL identifier of the repository.
   */
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
    }>;
  /**
   * Whether the repository is private.
   */
  private: boolean;
  /**
   * The default branch for the repository.
   */
  default_branch: string &
    tags.JsonSchemaPlugin<{
      example: "main";
    }>;
};
