import { tags } from "typia";

/**
 * Represents a 'pull_request_title' secret scanning location type. This location type shows that a secret was detected in the title of a pull request.
 */
export type secret_minus_scanning_minus_location_minus_pull_minus_request_minus_title =
  {
    /**
     * The API URL to get the pull request where the secret was detected.
     */
    pull_request_title_url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://api.github.com/repos/octocat/Hello-World/pull/2846";
      }>;
  };
