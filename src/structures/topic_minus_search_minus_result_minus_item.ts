import { tags } from "typia";

import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";

/**
 * Topic Search Result Item
 *
 * @title Topic Search Result Item
 */
export type topic_minus_search_minus_result_minus_item = {
  name: string;
  display_name: string | null;
  short_description: string | null;
  description: string | null;
  created_by: string | null;
  released: string | null;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  featured: boolean;
  curated: boolean;
  score: number;
  repository_count?: (number & tags.Type<"int32">) | null;
  logo_url?: (string & tags.Format<"uri">) | null;
  text_matches?: search_minus_result_minus_text_minus_matches;
  related?:
    | {
        topic_relation?: {
          id?: number & tags.Type<"int32">;
          name?: string;
          topic_id?: number & tags.Type<"int32">;
          relation_type?: string;
        };
      }[]
    | null;
  aliases?:
    | {
        topic_relation?: {
          id?: number & tags.Type<"int32">;
          name?: string;
          topic_id?: number & tags.Type<"int32">;
          relation_type?: string;
        };
      }[]
    | null;
};
