import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { team } from "./team";

/**
 * Review Request Removed Issue Event
 *
 * @title Review Request Removed Issue Event
 */
export type review_minus_request_minus_removed_minus_issue_minus_event = {
  id: number & tags.Type<"int32">;
  node_id: string;
  url: string;
  actor: simple_minus_user;
  event: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: nullable_minus_integration;
  review_requester: simple_minus_user;
  requested_team?: team;
  requested_reviewer?: simple_minus_user;
};
