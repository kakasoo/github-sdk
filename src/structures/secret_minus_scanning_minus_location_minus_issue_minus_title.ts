import { tags } from "typia";

/**
 * Represents an 'issue_title' secret scanning location type. This location type shows that a secret was detected in the title of an issue.
 */
export type secret_minus_scanning_minus_location_minus_issue_minus_title = {
  /**
   * The API URL to get the issue where the secret was detected.
   */
  issue_title_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/issues/1347";
    }>;
};
