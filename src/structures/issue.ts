import { tags } from "typia";

import { author_minus_association } from "./author_minus_association";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { nullable_minus_milestone } from "./nullable_minus_milestone";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { reaction_minus_rollup } from "./reaction_minus_rollup";
import { repository } from "./repository";
import { simple_minus_user } from "./simple_minus_user";

/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
 *
 * @title Issue
 */
export type issue = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  node_id: string;
  /**
   * URL for the issue
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repositories/42/issues/1";
    }>;
  repository_url: string & tags.Format<"uri">;
  labels_url: string;
  comments_url: string & tags.Format<"uri">;
  events_url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  /**
   * Number uniquely identifying the issue within its repository
   */
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * State of the issue; either 'open' or 'closed'
   */
  state: string &
    tags.JsonSchemaPlugin<{
      example: "open";
    }>;
  /**
   * The reason for the current state
   */
  state_reason?: "completed" | "reopened" | "not_planned" | null;
  /**
   * Title of the issue
   */
  title: string &
    tags.JsonSchemaPlugin<{
      example: "Widget creation fails in Safari on OS X 10.8";
    }>;
  /**
   * Contents of the issue
   */
  body?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "It looks like the new widget form is broken on Safari. When I try and create the widget, Safari crashes. This is reproducible on 10.8, but not 10.9. Maybe a browser bug?";
        }>)
    | null;
  user: nullable_minus_simple_minus_user;
  /**
   * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
   */
  labels: (
    | string
    | {
        id?: number &
          tags.Type<"int32"> &
          tags.JsonSchemaPlugin<{
            format: "int64";
          }>;
        node_id?: string;
        url?: string & tags.Format<"uri">;
        name?: string;
        description?: string | null;
        color?: string | null;
        default?: boolean;
      }
  )[] &
    tags.JsonSchemaPlugin<{
      example: ["bug", "registration"];
    }>;
  assignee: nullable_minus_simple_minus_user;
  assignees?: simple_minus_user[] | null;
  milestone: nullable_minus_milestone;
  locked: boolean;
  active_lock_reason?: string | null;
  comments: number & tags.Type<"int32">;
  pull_request?: {
    merged_at?: (string & tags.Format<"date-time">) | null;
    diff_url: (string & tags.Format<"uri">) | null;
    html_url: (string & tags.Format<"uri">) | null;
    patch_url: (string & tags.Format<"uri">) | null;
    url: (string & tags.Format<"uri">) | null;
  };
  closed_at: (string & tags.Format<"date-time">) | null;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  draft?: boolean;
  closed_by?: nullable_minus_simple_minus_user;
  body_html?: string;
  body_text?: string;
  timeline_url?: string & tags.Format<"uri">;
  repository?: repository;
  performed_via_github_app?: nullable_minus_integration;
  author_association: author_minus_association;
  reactions?: reaction_minus_rollup;
};
