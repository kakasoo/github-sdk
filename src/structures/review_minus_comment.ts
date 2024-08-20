import { tags } from "typia";

import { author_minus_association } from "./author_minus_association";
import { link } from "./link";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * Legacy Review Comment
 *
 * @title Legacy Review Comment
 */
export type review_minus_comment = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1";
    }>;
  pull_request_review_id:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
          example: 42;
        }>)
    | null;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 10;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw";
    }>;
  diff_hunk: string &
    tags.JsonSchemaPlugin<{
      example: "@@ -16,33 +16,40 @@ public class Connection : IConnection...";
    }>;
  path: string &
    tags.JsonSchemaPlugin<{
      example: "file1.txt";
    }>;
  position:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 1;
        }>)
    | null;
  original_position: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 4;
    }>;
  commit_id: string &
    tags.JsonSchemaPlugin<{
      example: "6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  original_commit_id: string &
    tags.JsonSchemaPlugin<{
      example: "9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840";
    }>;
  in_reply_to_id?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 8;
    }>;
  user: nullable_minus_simple_minus_user;
  body: string &
    tags.JsonSchemaPlugin<{
      example: "Great stuff";
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
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1";
    }>;
  pull_request_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/pulls/1";
    }>;
  author_association: author_minus_association;
  _links: {
    self: link;
    html: link;
    pull_request: link;
  };
  body_text?: string;
  body_html?: string;
  reactions?: reaction_minus_rollup;
  /**
   * The side of the first line of the range for a multi-line comment.
   */
  side?: "LEFT" | "RIGHT";
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
   * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
   */
  original_line?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
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
   * The original first line of the range for a multi-line comment.
   */
  original_start_line?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 2;
        }>)
    | null;
};
