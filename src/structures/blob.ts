import { tags } from "typia";

/**
 * Blob
 *
 * @title Blob
 */
export type blob = {
  content: string;
  encoding: string;
  url: string & tags.Format<"uri">;
  sha: string;
  size: (number & tags.Type<"int32">) | null;
  node_id: string;
  highlighted_content?: string;
};
