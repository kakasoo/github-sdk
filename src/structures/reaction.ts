import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
 *
 * @title Reaction
 */
export type reaction = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDg6UmVhY3Rpb24x";
    }>;
  user: nullable_minus_simple_minus_user;
  /**
   * The reaction to use
   */
  content:
    | "+1"
    | "-1"
    | "laugh"
    | "confused"
    | "heart"
    | "hooray"
    | "rocket"
    | "eyes";
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2016-05-20T20:09:31Z";
    }>;
};
