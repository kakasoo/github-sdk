import { tags } from "typia";

import { nullable_minus_integration } from "./nullable_minus_integration";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Locked Issue Event
 *
 * @title Locked Issue Event
 */
export type locked_minus_issue_minus_event = {
  id: number & tags.Type<"int32">;
  node_id: string;
  url: string;
  actor: simple_minus_user;
  event: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: nullable_minus_integration;
  lock_reason:
    | (string &
        tags.JsonSchemaPlugin<{
          example: '"off-topic"';
        }>)
    | null;
};
