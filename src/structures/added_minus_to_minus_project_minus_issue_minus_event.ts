import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { nullable_minus_integration } from "./nullable_minus_integration";

/**
 * Added to Project Issue Event
 *
 * @title Added to Project Issue Event
 */
export type added_minus_to_minus_project_minus_issue_minus_event = {
  id: number & tags.Type<"int32">;
  node_id: string;
  url: string;
  actor: simple_minus_user;
  event: string;
  commit_id: string | null;
  commit_url: string | null;
  created_at: string;
  performed_via_github_app: nullable_minus_integration;
  project_card?: {
    id: number & tags.Type<"int32">;
    url: string & tags.Format<"uri">;
    project_id: number & tags.Type<"int32">;
    project_url: string & tags.Format<"uri">;
    column_name: string;
    previous_column_name?: string;
  };
};
