import { tags } from "typia";

/**
 * Represents an 'issue_comment' secret scanning location type. This location type shows that a secret was detected in a comment on an issue.
 */
export type secret_minus_scanning_minus_location_minus_issue_minus_comment = {
  /**
   * The API URL to get the issue comment where the secret was detected.
   */
  issue_comment_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/comments/1081119451";
    }>;
};
