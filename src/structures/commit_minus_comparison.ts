import { tags } from "typia";

import { commit } from "./commit";
import { diff_minus_entry } from "./diff_minus_entry";

/**
 * Commit Comparison
 *
 * @title Commit Comparison
 */
export type commit_minus_comparison = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/compare/master...topic";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/compare/master...topic";
    }>;
  permalink_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/compare/octocat:bbcd538c8e72b8c175046e27cc8f907076331401...octocat:0328041d1152db8ae77652d1618a02e57f745f17";
    }>;
  diff_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/compare/master...topic.diff";
    }>;
  patch_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/compare/master...topic.patch";
    }>;
  base_commit: commit;
  merge_base_commit: commit;
  status: "diverged" | "ahead" | "behind" | "identical";
  ahead_by: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 4;
    }>;
  behind_by: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  total_commits: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 6;
    }>;
  commits: commit[];
  files?: diff_minus_entry[];
};
