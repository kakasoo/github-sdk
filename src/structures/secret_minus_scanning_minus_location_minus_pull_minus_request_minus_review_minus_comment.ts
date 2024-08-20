import { tags } from "typia";

/**
 * Represents a 'pull_request_review_comment' secret scanning location type. This location type shows that a secret was detected in a review comment on a pull request.
 */
export type secret_minus_scanning_minus_location_minus_pull_minus_request_minus_review_minus_comment =
  {
    /**
     * The API URL to get the pull request review comment where the secret was detected.
     */
    pull_request_review_comment_url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/pulls/comments/12";
      }>;
  };
