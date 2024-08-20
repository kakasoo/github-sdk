import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { author_minus_association } from "./author_minus_association";

/**
 * Timeline Reviewed Event
 *
 * @title Timeline Reviewed Event
 */
export type timeline_minus_reviewed_minus_event = {
  event: string;
  /**
   * Unique identifier of the review
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=";
    }>;
  user: simple_minus_user;
  /**
   * The text of the review.
   */
  body:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "This looks great.";
        }>)
    | null;
  state: string &
    tags.JsonSchemaPlugin<{
      example: "CHANGES_REQUESTED";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/12#pullrequestreview-80";
    }>;
  pull_request_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/12";
    }>;
  _links: {
    html: {
      href: string;
    };
    pull_request: {
      href: string;
    };
  };
  submitted_at?: string & tags.Format<"date-time">;
  /**
   * A commit SHA for the review.
   */
  commit_id: string &
    tags.JsonSchemaPlugin<{
      example: "54bb654c9e6025347f57900a4a5c2313a96b8035";
    }>;
  body_html?: string;
  body_text?: string;
  author_association: author_minus_association;
};
