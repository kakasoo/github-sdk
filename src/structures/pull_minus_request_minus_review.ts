import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { author_minus_association } from "./author_minus_association";

/**
 * Pull Request Reviews are reviews on pull requests.
 *
 * @title Pull Request Review
 */
export type pull_minus_request_minus_review = {
  /**
   * Unique identifier of the review
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
      format: "int64";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3ODA=";
    }>;
  user: nullable_minus_simple_minus_user;
  /**
   * The text of the review.
   */
  body: string &
    tags.JsonSchemaPlugin<{
      example: "This looks great.";
    }>;
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
   * A commit SHA for the review. If the commit object was garbage collected or forcibly deleted, then it no longer exists in Git and this value will be `null`.
   */
  commit_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "54bb654c9e6025347f57900a4a5c2313a96b8035";
        }>)
    | null;
  body_html?: string;
  body_text?: string;
  author_association: author_minus_association;
};
