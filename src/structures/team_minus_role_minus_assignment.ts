import { tags } from "typia";

import { nullable_minus_team_minus_simple } from "./nullable_minus_team_minus_simple";

/**
 * The Relationship a Team has with a role.
 *
 * @title A Role Assignment for a Team
 */
export type team_minus_role_minus_assignment = {
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
