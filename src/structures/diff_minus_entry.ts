import { tags } from "typia";

/**
 * Diff Entry
 *
 * @title Diff Entry
 */
export type diff_minus_entry = {
  sha: string &
    tags.JsonSchemaPlugin<{
      example: "bbcd538c8e72b8c175046e27cc8f907076331401";
    }>;
  filename: string &
    tags.JsonSchemaPlugin<{
      example: "file1.txt";
    }>;
  status:
    | "added"
    | "removed"
    | "modified"
    | "renamed"
    | "copied"
    | "changed"
    | "unchanged";
  additions: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 103;
    }>;
  deletions: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 21;
    }>;
  changes: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 124;
    }>;
  blob_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/blob/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt";
    }>;
  raw_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat/Hello-World/raw/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt";
    }>;
  contents_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/contents/file1.txt?ref=6dcb09b5b57875f334f61aebed695e2e4193db5e";
    }>;
  patch?: string &
    tags.JsonSchemaPlugin<{
      example: "@@ -132,7 +132,7 @@ module Test @@ -1000,7 +1000,7 @@ module Test";
    }>;
  previous_filename?: string &
    tags.JsonSchemaPlugin<{
      example: "file.txt";
    }>;
};
