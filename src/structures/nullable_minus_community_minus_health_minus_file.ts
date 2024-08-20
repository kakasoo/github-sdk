import { tags } from "typia";

/**
 * @title Community Health File
 */
export type nullable_minus_community_minus_health_minus_file = {
  url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
} | null;
