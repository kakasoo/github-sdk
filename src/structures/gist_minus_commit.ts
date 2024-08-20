import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Gist Commit
 *
 * @title Gist Commit
 */
export type gist_minus_commit = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f";
    }>;
  version: string &
    tags.JsonSchemaPlugin<{
      example: "57a7f021a713b1c5a6a199b54cc514735d2d462f";
    }>;
  user: nullable_minus_simple_minus_user;
  change_status: {
    total?: number & tags.Type<"int32">;
    additions?: number & tags.Type<"int32">;
    deletions?: number & tags.Type<"int32">;
  };
  committed_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2010-04-14T02:15:15Z";
    }>;
};
