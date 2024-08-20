import { tags } from "typia";

import { app_minus_permissions } from "./app_minus_permissions";
import { repository } from "./repository";

/**
 * Authentication token for a GitHub App installed on a user or org.
 *
 * @title Installation Token
 */
export type installation_minus_token = {
  token: string;
  expires_at: string;
  permissions?: app_minus_permissions;
  repository_selection?: "all" | "selected";
  repositories?: repository[];
  single_file?: string &
    tags.JsonSchemaPlugin<{
      example: "README.md";
    }>;
  has_multiple_single_files?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  single_file_paths?: string[] &
    tags.JsonSchemaPlugin<{
      example: ["config.yml", ".github/issue_TEMPLATE.md"];
    }>;
};
