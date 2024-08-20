import { tags } from "typia";

/**
 * The full Git reference, formatted as `refs/heads/<branch name>`,
 * `refs/tags/<tag>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
 */
export type code_minus_scanning_minus_ref_minus_full = string &
  tags.Pattern<"^refs/(heads|tags|pull)/.*$"> &
  tags.JsonSchemaPlugin<{
    example: "refs/heads/main";
  }>;
