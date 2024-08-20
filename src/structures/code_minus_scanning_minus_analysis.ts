import { tags } from "typia";

import { code_minus_scanning_minus_ref } from "./code_minus_scanning_minus_ref";
import { code_minus_scanning_minus_analysis_minus_commit_minus_sha } from "./code_minus_scanning_minus_analysis_minus_commit_minus_sha";
import { code_minus_scanning_minus_analysis_minus_analysis_minus_key } from "./code_minus_scanning_minus_analysis_minus_analysis_minus_key";
import { code_minus_scanning_minus_analysis_minus_environment } from "./code_minus_scanning_minus_analysis_minus_environment";
import { code_minus_scanning_minus_analysis_minus_category } from "./code_minus_scanning_minus_analysis_minus_category";
import { code_minus_scanning_minus_analysis_minus_created_minus_at } from "./code_minus_scanning_minus_analysis_minus_created_minus_at";
import { code_minus_scanning_minus_analysis_minus_url } from "./code_minus_scanning_minus_analysis_minus_url";
import { code_minus_scanning_minus_analysis_minus_sarif_minus_id } from "./code_minus_scanning_minus_analysis_minus_sarif_minus_id";
import { code_minus_scanning_minus_analysis_minus_tool } from "./code_minus_scanning_minus_analysis_minus_tool";

export type code_minus_scanning_minus_analysis = {
  ref: code_minus_scanning_minus_ref;
  commit_sha: code_minus_scanning_minus_analysis_minus_commit_minus_sha;
  analysis_key: code_minus_scanning_minus_analysis_minus_analysis_minus_key;
  environment: code_minus_scanning_minus_analysis_minus_environment;
  category?: code_minus_scanning_minus_analysis_minus_category;
  error: string &
    tags.JsonSchemaPlugin<{
      example: "error reading field xyz";
    }>;
  created_at: code_minus_scanning_minus_analysis_minus_created_minus_at;
  /**
   * The total number of results in the analysis.
   */
  results_count: number & tags.Type<"int32">;
  /**
   * The total number of rules used in the analysis.
   */
  rules_count: number & tags.Type<"int32">;
  /**
   * Unique identifier for this analysis.
   */
  id: number & tags.Type<"int32">;
  url: code_minus_scanning_minus_analysis_minus_url;
  sarif_id: code_minus_scanning_minus_analysis_minus_sarif_minus_id;
  tool: code_minus_scanning_minus_analysis_minus_tool;
  deletable: boolean;
  /**
   * Warning generated when processing the analysis
   */
  warning: string &
    tags.JsonSchemaPlugin<{
      example: "123 results were ignored";
    }>;
};
