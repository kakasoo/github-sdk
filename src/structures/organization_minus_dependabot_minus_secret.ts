import { tags } from "typia";

/**
 * Secrets for GitHub Dependabot for an organization.
 *
 * @title Dependabot Secret for an Organization
 */
export type organization_minus_dependabot_minus_secret = {
  /**
   * The name of the secret.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "SECRET_TOKEN";
    }>;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  /**
   * Visibility of a secret
   */
  visibility: "all" | "private" | "selected";
  selected_repositories_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/org/dependabot/secrets/my_secret/repositories";
    }>;
};
