import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { repository } from "./repository";

/**
 * A migration.
 *
 * @title Migration
 */
export type migration = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 79;
    }>;
  owner: nullable_minus_simple_minus_user;
  guid: string &
    tags.JsonSchemaPlugin<{
      example: "0b989ba4-242f-11e5-81e1-c7b6966d2516";
    }>;
  state: string &
    tags.JsonSchemaPlugin<{
      example: "pending";
    }>;
  lock_repositories: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  exclude_metadata: boolean;
  exclude_git_data: boolean;
  exclude_attachments: boolean;
  exclude_releases: boolean;
  exclude_owner_projects: boolean;
  org_metadata_only: boolean;
  /**
   * The repositories included in the migration. Only returned for export migrations.
   */
  repositories: repository[];
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/octo-org/migrations/79";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2015-07-06T15:33:38-07:00";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2015-07-06T15:33:38-07:00";
    }>;
  node_id: string;
  archive_url?: string & tags.Format<"uri">;
  /**
   * Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.
   */
  exclude?: string[];
};
