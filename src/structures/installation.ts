import { tags } from "typia";

import { simple_minus_user } from "./simple_minus_user";
import { enterprise } from "./enterprise";
import { app_minus_permissions } from "./app_minus_permissions";
import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Installation
 *
 * @title Installation
 */
export type installation = {
  /**
   * The ID of the installation.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  account: simple_minus_user | enterprise | null;
  /**
   * Describe whether all repositories have been selected or there's a selection involved
   */
  repository_selection: "all" | "selected";
  access_tokens_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/app/installations/1/access_tokens";
    }>;
  repositories_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/installation/repositories";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/organizations/github/settings/installations/1";
    }>;
  app_id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * The ID of the user or organization this token is being scoped to.
   */
  target_id: number & tags.Type<"int32">;
  target_type: string &
    tags.JsonSchemaPlugin<{
      example: "Organization";
    }>;
  permissions: app_minus_permissions;
  events: string[];
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
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
  app_slug: string &
    tags.JsonSchemaPlugin<{
      example: "github-actions";
    }>;
  suspended_by: nullable_minus_simple_minus_user;
  suspended_at: (string & tags.Format<"date-time">) | null;
  contact_email?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: '"test_13f1e99741e3e004@d7e1eb0bc0a1ba12.com"';
        }>)
    | null;
};
