import { tags } from "typia";

/**
 * @title Workflow
 */
export type webhooks_workflow = {
  badge_url: string & tags.Format<"uri">;
  created_at: string & tags.Format<"date-time">;
  html_url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  name: string;
  node_id: string;
  path: string;
  state: string;
  updated_at: string & tags.Format<"date-time">;
  url: string & tags.Format<"uri">;
} | null;
