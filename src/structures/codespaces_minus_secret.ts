import { tags } from "typia";

/**
 * Secrets for a GitHub Codespace.
 *
 * @title Codespaces Secret
 */
export type codespaces_minus_secret = {
  /**
   * The name of the secret
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "SECRET_NAME";
    }>;
  /**
   * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  created_at: string & tags.Format<"date-time">;
  /**
   * The date and time at which the secret was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
   */
  updated_at: string & tags.Format<"date-time">;
  /**
   * The type of repositories in the organization that the secret is visible to
   */
  visibility: "all" | "private" | "selected";
  /**
   * The API URL at which the list of repositories this secret is visible to can be retrieved
   */
  selected_repositories_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/user/secrets/SECRET_NAME/repositories";
    }>;
};
