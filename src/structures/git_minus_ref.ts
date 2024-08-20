import { tags } from "typia";

/**
 * Git references within a repository
 *
 * @title Git Reference
 */
export type git_minus_ref = {
  ref: string;
  node_id: string;
  url: string & tags.Format<"uri">;
  object: {
    type: string;
    /**
     * SHA for the reference
     */
    sha: string &
      tags.MinLength<40> &
      tags.MaxLength<40> &
      tags.JsonSchemaPlugin<{
        example: "7638417db6d59f3c431d3e1f261cc637155684cd";
      }>;
    url: string & tags.Format<"uri">;
  };
};
