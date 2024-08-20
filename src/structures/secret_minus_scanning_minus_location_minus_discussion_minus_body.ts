import { tags } from "typia";

/**
 * Represents a 'discussion_body' secret scanning location type. This location type shows that a secret was detected in the body of a discussion.
 */
export type secret_minus_scanning_minus_location_minus_discussion_minus_body = {
  /**
   * The URL to the discussion where the secret was detected.
   */
  discussion_body_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/community/community/discussions/39082#discussion-4566270";
    }>;
};
