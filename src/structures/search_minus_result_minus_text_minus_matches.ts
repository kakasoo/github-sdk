import { tags } from "typia";

/**
 * @title Search Result Text Matches
 */
export type search_minus_result_minus_text_minus_matches = {
  object_url?: string;
  object_type?: string | null;
  property?: string;
  fragment?: string;
  matches?: {
    text?: string;
    indices?: (number & tags.Type<"int32">)[];
  }[];
}[];
