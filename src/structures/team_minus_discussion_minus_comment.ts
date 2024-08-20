import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * A reply to a discussion within a team.
 *
 * @title Team Discussion Comment
 */
export type team_minus_discussion_minus_comment = {
  author: nullable_minus_simple_minus_user;
  /**
   * The main text of the comment.
   */
  body: string &
    tags.JsonSchemaPlugin<{
      example: "I agree with this suggestion.";
    }>;
  body_html: string &
    tags.JsonSchemaPlugin<{
      example: "<p>Do you like apples?</p>";
    }>;
  /**
   * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
   */
  body_version: string &
    tags.JsonSchemaPlugin<{
      example: "0307116bbf7ced493b8d8a346c650b71";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2018-01-15T23:53:58Z";
    }>;
  last_edited_at: (string & tags.Format<"date-time">) | null;
  discussion_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/2403582/discussions/1";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE=";
    }>;
  /**
   * The unique sequence number of a team discussion comment.
   */
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2018-01-15T23:53:58Z";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/2403582/discussions/1/comments/1";
    }>;
  reactions?: reaction_minus_rollup;
};
