import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * The status of a commit.
 *
 * @title Status
 */
export type status = {
  url: string;
  avatar_url: string | null;
  id: number & tags.Type<"int32">;
  node_id: string;
  state: string;
  description: string | null;
  target_url: string | null;
  context: string;
  created_at: string;
  updated_at: string;
  creator: nullable_minus_simple_minus_user;
};
