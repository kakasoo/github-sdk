import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { integration } from "./integration";

/**
 * Assigned Issue Event
 *
 * @title Assigned Issue Event
 */
export type assigned_minus_issue_minus_event = {
  id: number & tags.Type<"int32">;
  node_id: string;
  url: string;
  actor: simple_minus_user;
  event: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: integration;
  assignee: simple_minus_user;
  assigner: simple_minus_user;
};
