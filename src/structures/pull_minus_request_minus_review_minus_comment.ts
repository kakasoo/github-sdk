import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { author_minus_association } from "./author_minus_association";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
 *
 * @title Pull Request Review Comment
 */
export type pull_minus_request_minus_review_minus_comment = {
  /**
   * URL for the pull request review comment
   */
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1";
    }>;
  /**
   * The ID of the pull request review to which the comment belongs.
   */
  pull_request_review_id:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
          example: 42;
        }>)
    | null;
  /**
   * The ID of the pull request review comment.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  /**
   * The node ID of the pull request review comment.
   */
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw";
    }>;
  /**
   * The diff of the line that the comment refers to.
   */
  diff_hunk: string &
    tags.JsonSchemaPlugin<{
      example: "@@ -16,33 +16,40 @@ public class Connection : IConnection...";
    }>;
  /**
   * The relative path of the file to which the comment applies.
   */
  path: string &
    tags.JsonSchemaPlugin<{
      example: "config/database.yaml";
    }>;
  /**
   * The line index in the diff to which the comment applies. This field is deprecated; use `line` instead.
   */
  position?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * The index of the original line in the diff to which the comment applies. This field is deprecated; use `original_line` instead.
   */
  original_position?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 4;
    }>;
  /**
   * The SHA of the commit to which the comment applies.
   */
  commit_id: string &
    tags.JsonSchemaPlugin<{
      example: "6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  /**
   * The SHA of the original commit to which the comment applies.
   */
  original_commit_id: string &
    tags.JsonSchemaPlugin<{
      example: "9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840";
    }>;
  /**
   * The comment ID to reply to.
   */
  in_reply_to_id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 8;
    }>;
  user: simple_minus_user;
  /**
   * The text of the comment.
   */
  body: string &
    tags.JsonSchemaPlugin<{
      example: "We should probably include a check for null values here.";
    }>;
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
  /**
   * HTML URL for the pull request review comment.
   */
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1";
    }>;
  /**
   * URL for the pull request that the review comment belongs to.
   */
  pull_request_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1";
    }>;
  author_association: author_minus_association;
  _links: {
    self: {
      href: string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1";
        }>;
    };
    html: {
      href: string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1";
        }>;
    };
    pull_request: {
      href: string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://api.github.com/repos/octocat/Hello-World/pulls/1";
        }>;
    };
  };
  /**
   * The first line of the range for a multi-line comment.
   */
  start_line?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 2;
        }>)
    | null;
  /**
   * The first line of the range for a multi-line comment.
   */
  original_start_line?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 2;
        }>)
    | null;
  /**
   * The side of the first line of the range for a multi-line comment.
   */
  start_side?: "LEFT" | "RIGHT" | null;
  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  line?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  /**
   * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  original_line?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  /**
   * The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
   */
  side?: "LEFT" | "RIGHT";
  /**
   * The level at which the comment is targeted, can be a diff line or a file.
   */
  subject_type?: "line" | "file";
  reactions?: reaction_minus_rollup;
  body_html?: string &
    tags.JsonSchemaPlugin<{
      example: '"<p>comment body</p>"';
    }>;
  body_text?: string &
    tags.JsonSchemaPlugin<{
      example: '"comment body"';
    }>;
};
