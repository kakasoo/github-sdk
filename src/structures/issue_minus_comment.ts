import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { author_minus_association } from "./author_minus_association";
import { nullable_minus_integration } from "./nullable_minus_integration";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * Comments provide a way for people to collaborate on an issue.
 *
 * @title Issue Comment
 */
export type issue_minus_comment = {
  /**
   * Unique identifier of the issue comment
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
      format: "int64";
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
  user: nullable_minus_simple_minus_user;
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
