import { tags } from "typia";

/**
 * Set repository secrets for GitHub Codespaces.
 *
 * @title Codespaces Secret
 */
export type repo_minus_codespaces_minus_secret = {
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
