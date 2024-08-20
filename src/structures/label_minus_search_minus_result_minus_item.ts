import { tags } from "typia";

import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";

/**
 * Label Search Result Item
 *
 * @title Label Search Result Item
 */
export type label_minus_search_minus_result_minus_item = {
  id: number & tags.Type<"int32">;
  node_id: string;
  url: string & tags.Format<"uri">;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
  score: number;
  text_matches?: search_minus_result_minus_text_minus_matches;
};
