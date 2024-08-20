import { tags } from "typia";

import { nullable_minus_team_minus_simple } from "./nullable_minus_team_minus_simple";

/**
 * Groups of organization members that gives permissions on specified repositories.
 *
 * @title Team
 */
export type team = {
  id: number & tags.Type<"int32">;
  node_id: string;
  name: string;
  slug: string;
  description: string | null;
  privacy?: string;
  notification_setting?: string;
  permission: string;
  permissions?: {
    pull: boolean;
    triage: boolean;
    push: boolean;
    maintain: boolean;
    admin: boolean;
  };
  url: string & tags.Format<"uri">;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/rails/teams/core";
    }>;
  members_url: string;
  repositories_url: string & tags.Format<"uri">;
  parent: nullable_minus_team_minus_simple;
};
