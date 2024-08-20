import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { author_minus_association } from "./author_minus_association";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * Timeline Comment Event
 *
 * @title Timeline Comment Event
 */
export type timeline_minus_comment_minus_event = {
  event: string;
  actor: simple_minus_user;
  /**
   * Unique identifier of the issue comment
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  node_id: string;
  /**
   * URL for the issue comment
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repositories/42/issues/comments/1";
    }>;
  /**
   * Contents of the issue comment
   */
  body?: string &
    tags.JsonSchemaPlugin<{
      example: "What version of Safari were you using when you observed this bug?";
    }>;
  body_text?: string;
  body_html?: string;
  html_url: string & tags.Format<"uri">;
  user: simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-14T16:00:49Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-14T16:00:49Z";
    }>;
  issue_url: string & tags.Format<"uri">;
  author_association: author_minus_association;
  performed_via_github_app?: nullable_minus_integration;
  reactions?: reaction_minus_rollup;
};
