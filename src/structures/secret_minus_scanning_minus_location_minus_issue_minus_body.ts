import { tags } from "typia";

/**
 * Represents an 'issue_body' secret scanning location type. This location type shows that a secret was detected in the body of an issue.
 */
export type secret_minus_scanning_minus_location_minus_issue_minus_body = {
  /**
   * The API URL to get the issue where the secret was detected.
   */
  issue_body_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/1347";
    }>;
};
