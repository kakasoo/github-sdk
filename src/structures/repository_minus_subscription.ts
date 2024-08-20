import { tags } from "typia";

/**
 * Repository invitations let you manage who you collaborate with.
 *
 * @title Repository Invitation
 */
export type repository_minus_subscription = {
  /**
   * Determines if notifications should be received from this repository.
   */
  subscribed: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Determines if all notifications should be blocked from this repository.
   */
  ignored: boolean;
  reason: string | null;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2012-10-06T21:34:12Z";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example/subscription";
    }>;
  repository_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/example";
    }>;
};
