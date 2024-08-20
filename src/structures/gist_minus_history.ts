import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Gist History
 *
 * @title Gist History
 */
export type gist_minus_history = {
  user?: nullable_minus_simple_minus_user;
  version?: string;
  committed_at?: string & tags.Format<"date-time">;
  change_status?: {
    total?: number & tags.Type<"int32">;
    additions?: number & tags.Type<"int32">;
    deletions?: number & tags.Type<"int32">;
  };
  url?: string & tags.Format<"uri">;
};
