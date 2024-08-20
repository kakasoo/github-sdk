import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Activity
 *
 * @title Activity
 */
export type activity = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1296269;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEwOlJlcG9zaXRvcnkxMjk2MjY5";
    }>;
  /**
   * The SHA of the commit before the activity.
   */
  before: string &
    tags.JsonSchemaPlugin<{
      example: "6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  /**
   * The SHA of the commit after the activity.
   */
  after: string &
    tags.JsonSchemaPlugin<{
      example: "827efc6d56897b048c772eb4087f854f46256132";
    }>;
  /**
   * The full Git reference, formatted as `refs/heads/<branch name>`.
   */
  ref: string &
    tags.JsonSchemaPlugin<{
      example: "refs/heads/main";
    }>;
  /**
   * The time when the activity occurred.
   */
  timestamp: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-01-26T19:06:43Z";
    }>;
  /**
   * The type of the activity that was performed.
   */
  activity_type:
    | "push"
    | "force_push"
    | "branch_deletion"
    | "branch_creation"
    | "pr_merge"
    | "merge_queue_merge";
  actor: nullable_minus_simple_minus_user;
};
