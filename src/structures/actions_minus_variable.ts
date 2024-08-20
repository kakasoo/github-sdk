import { tags } from "typia";

/**
 * @title Actions Variable
 */
export type actions_minus_variable = {
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
};
