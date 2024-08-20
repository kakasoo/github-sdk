import { tags } from "typia";

/**
 * Whether or not a user who created the job is prevented from approving their own job.
 */
export type prevent_minus_self_minus_review = boolean &
  tags.JsonSchemaPlugin<{
    example: false;
  }>;
