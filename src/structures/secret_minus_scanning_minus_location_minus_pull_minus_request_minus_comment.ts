import { tags } from "typia";

/**
 * Represents a 'pull_request_comment' secret scanning location type. This location type shows that a secret was detected in a comment on a pull request.
 */
export type secret_minus_scanning_minus_location_minus_pull_minus_request_minus_comment =
  {
    /**
     * The API URL to get the pull request comment where the secret was detected.
     */
    pull_request_comment_url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/issues/comments/1081119451";
      }>;
  };
