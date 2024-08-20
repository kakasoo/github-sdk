import { tags } from "typia";

/**
 * Set secrets for GitHub Actions.
 *
 * @title Actions Secret
 */
export type actions_minus_secret = {
  /**
   * The name of the secret.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "SECRET_TOKEN";
    }>;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
};
