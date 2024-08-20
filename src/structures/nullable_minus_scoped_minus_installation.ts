import { tags } from "typia";

import { app_minus_permissions } from "./app_minus_permissions";
import { simple_minus_user } from "./simple_minus_user";

/**
 * @title Scoped Installation
 */
export type nullable_minus_scoped_minus_installation = {
  permissions: app_minus_permissions;
  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection: "all" | "selected";
  single_file_name:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "config.yaml";
        }>)
    | null;
  has_multiple_single_files?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  single_file_paths?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["config.yml", ".github/issue_TEMPLATE.md"];
    }>;
  repositories_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/repos";
    }>;
  account: simple_minus_user;
} | null;
