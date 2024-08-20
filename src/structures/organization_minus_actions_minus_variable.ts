import { tags } from "typia";

/**
 * Organization variable for GitHub Actions.
 *
 * @title Actions Variable for an Organization
 */
export type organization_minus_actions_minus_variable = {
  /**
   * The name of the variable.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "USERNAME";
    }>;
  /**
   * The value of the variable.
   */
  value: string &
    tags.JsonSchemaPlugin<{
      example: "octocat";
    }>;
  /**
   * The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-01-24T22:45:36.000Z";
    }>;
  /**
   * The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2019-01-24T22:45:36.000Z";
    }>;
  /**
   * Visibility of a variable
   */
  visibility: "all" | "private" | "selected";
  selected_repositories_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/org/variables/USERNAME/repositories";
    }>;
};
