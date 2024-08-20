import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { author_minus_association } from "./author_minus_association";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * Commit Comment
 *
 * @title Commit Comment
 */
export type commit_minus_comment = {
  html_url: string & tags.Format<"uri">;
  url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  node_id: string;
  body: string;
  path: string | null;
  position: (number & tags.Type<"int32">) | null;
  line: (number & tags.Type<"int32">) | null;
  commit_id: string;
  user: nullable_minus_simple_minus_user;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  author_association: author_minus_association;
  reactions?: reaction_minus_rollup;
};
