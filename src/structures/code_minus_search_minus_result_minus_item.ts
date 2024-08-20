import { tags } from "typia";

import { minimal_minus_repository } from "./minimal_minus_repository";
import { search_minus_result_minus_text_minus_matches } from "./search_minus_result_minus_text_minus_matches";

/**
 * Code Search Result Item
 *
 * @title Code Search Result Item
 */
export type code_minus_search_minus_result_minus_item = {
  name: string;
  path: string;
  sha: string;
  url: string & tags.Format<"uri">;
  git_url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  repository: minimal_minus_repository;
  score: number;
  file_size?: number & tags.Type<"int32">;
  language?: string | null;
  last_modified_at?: string & tags.Format<"date-time">;
  line_numbers?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["73..77", "77..78"];
    }>;
  text_matches?: search_minus_result_minus_text_minus_matches;
};
