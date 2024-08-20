import { tags } from "typia";

/**
 * The SHA of the commit to which the analysis you are uploading relates.
 */
export type code_minus_scanning_minus_analysis_minus_commit_minus_sha = string &
  tags.MinLength<40> &
  tags.MaxLength<40> &
  tags.Pattern<"^[0-9a-fA-F]+$">;
