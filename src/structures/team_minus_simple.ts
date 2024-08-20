import { tags } from "typia";

/**
 * Groups of organization members that gives permissions on specified repositories.
 *
 * @title Team Simple
 */
export type team_minus_simple = {
  /**
   * Unique identifier of the team
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
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
  members_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/1/members{/member}";
    }>;
  /**
   * Name of the team
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Justice League";
    }>;
  /**
   * Description of the team
   */
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "A great team.";
        }>)
    | null;
  /**
   * Permission that the team will have for its repositories
   */
  permission: string &
    tags.JsonSchemaPlugin<{
      example: "admin";
    }>;
  /**
   * The level of privacy this team should have
   */
  privacy?: string &
    tags.JsonSchemaPlugin<{
      example: "closed";
    }>;
  /**
   * The notification setting the team has set
   */
  notification_setting?: string &
    tags.JsonSchemaPlugin<{
      example: "notifications_enabled";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/rails/teams/core";
    }>;
  repositories_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/1/repos";
    }>;
  slug: string &
    tags.JsonSchemaPlugin<{
      example: "justice-league";
    }>;
  /**
   * Distinguished Name (DN) that team maps to within LDAP environment
   */
  ldap_dn?: string &
    tags.JsonSchemaPlugin<{
      example: "uid=example,ou=users,dc=github,dc=com";
    }>;
};
