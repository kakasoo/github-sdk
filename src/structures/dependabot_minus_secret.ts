import { tags } from "typia";

/**
 * Set secrets for Dependabot.
 *
 * @title Dependabot Secret
 */
export type dependabot_minus_secret = {
  /**
   * The name of the secret.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "MY_ARTIFACTORY_PASSWORD";
    }>;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
};
