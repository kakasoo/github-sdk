import { tags } from "typia";

/**
 * Represents a 'discussion_comment' secret scanning location type. This location type shows that a secret was detected in a comment on a discussion.
 */
export type secret_minus_scanning_minus_location_minus_discussion_minus_comment =
  {
    /**
     * The API URL to get the discussion comment where the secret was detected.
     */
    discussion_comment_url: string &
      tags.Format<"uri"> &
      tags.JsonSchemaPlugin<{
        example: "https://github.com/community/community/discussions/39082#discussioncomment-4158232";
      }>;
  };
