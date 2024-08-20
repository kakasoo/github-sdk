import { tags } from "typia";

/**
 * @title Simple Commit Status
 */
export type simple_minus_commit_minus_status = {
  description: string | null;
  id: number & tags.Type<"int32">;
  node_id: string;
  state: string;
  context: string;
  target_url: (string & tags.Format<"uri">) | null;
  required?: boolean | null;
  avatar_url: (string & tags.Format<"uri">) | null;
  url: string & tags.Format<"uri">;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
};
