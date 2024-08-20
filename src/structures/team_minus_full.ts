import { tags } from "typia";

import { nullable_minus_team_minus_simple } from "./nullable_minus_team_minus_simple";
import { team_minus_organization } from "./team_minus_organization";

/**
 * Groups of organization members that gives permissions on specified repositories.
 *
 * @title Full Team
 */
export type team_minus_full = {
  /**
   * Unique identifier of the team
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDQ6VGVhbTE=";
    }>;
  /**
   * URL for the team
   */
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/1";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/rails/teams/core";
    }>;
  /**
   * Name of the team
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Developers";
    }>;
  slug: string &
    tags.JsonSchemaPlugin<{
      example: "justice-league";
    }>;
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "A great team.";
        }>)
    | null;
  /**
   * The level of privacy this team should have
   */
  privacy?: "closed" | "secret";
  /**
   * The notification setting the team has set
   */
  notification_setting?: "notifications_enabled" | "notifications_disabled";
  /**
   * Permission that the team will have for its repositories
   */
  permission: string &
    tags.JsonSchemaPlugin<{
      example: "push";
    }>;
  members_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/1/members{/member}";
    }>;
  repositories_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/1/repos";
    }>;
  parent?: nullable_minus_team_minus_simple;
  members_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
  repos_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 10;
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2017-07-14T16:53:42Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2017-08-17T12:37:15Z";
    }>;
  organization: team_minus_organization;
  /**
   * Distinguished Name (DN) that team maps to within LDAP environment
   */
  ldap_dn?: string &
    tags.JsonSchemaPlugin<{
      example: "uid=example,ou=users,dc=github,dc=com";
    }>;
};
