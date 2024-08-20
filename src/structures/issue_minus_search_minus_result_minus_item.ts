import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { nullable_minus_milestone } from "./nullable_minus_milestone";
import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";
import { author_minus_association } from "./author_minus_association";
import { repository } from "./repository";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * Issue Search Result Item
 *
 * @title Issue Search Result Item
 */
export type issue_minus_search_minus_result_minus_item = {
  url: string & tags.Format<"uri">;
  repository_url: string & tags.Format<"uri">;
  labels_url: string;
  comments_url: string & tags.Format<"uri">;
  events_url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  node_id: string;
  number: number & tags.Type<"int32">;
  title: string;
  locked: boolean;
  active_lock_reason?: string | null;
  assignees?: simple_minus_user[] | null;
  user: nullable_minus_simple_minus_user;
  labels: {
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
    node_id?: string;
    url?: string;
    name?: string;
    color?: string;
    default?: boolean;
    description?: string | null;
  }[];
  state: string;
  state_reason?: string | null;
  assignee: nullable_minus_simple_minus_user;
  milestone: nullable_minus_milestone;
  comments: number & tags.Type<"int32">;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  closed_at: (string & tags.Format<"date-time">) | null;
  text_matches?: search_minus_result_minus_text_minus_matches;
  pull_request?: {
    merged_at?: (string & tags.Format<"date-time">) | null;
    diff_url: (string & tags.Format<"uri">) | null;
    html_url: (string & tags.Format<"uri">) | null;
    patch_url: (string & tags.Format<"uri">) | null;
    url: (string & tags.Format<"uri">) | null;
  };
  body?: string;
  score: number;
  author_association: author_minus_association;
  draft?: boolean;
  repository?: repository;
  body_html?: string;
  body_text?: string;
  timeline_url?: string & tags.Format<"uri">;
  performed_via_github_app?: nullable_minus_integration;
  reactions?: reaction_minus_rollup;
};
