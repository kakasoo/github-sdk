import { tags } from "typia";

import { author_minus_association } from "./author_minus_association";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * A comment made to a gist.
 *
 * @title Gist Comment
 */
export type gist_minus_comment = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDExOkdpc3RDb21tZW50MQ==";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/gists/a6db0bec360bb87e9418/comments/1";
    }>;
  /**
   * The comment text.
   */
  body: string &
    tags.MaxLength<65535> &
    tags.JsonSchemaPlugin<{
      example: "Body of the attachment";
    }>;
  user: nullable_minus_simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-18T23:23:56Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-18T23:23:56Z";
    }>;
  author_association: author_minus_association;
};
