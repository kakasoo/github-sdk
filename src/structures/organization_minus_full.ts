import { tags } from "typia";

/**
 * Organization Full
 *
 * @title Organization Full
 */
export type organization_minus_full = {
  login: string &
    tags.JsonSchemaPlugin<{
      example: "github";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDEyOk9yZ2FuaXphdGlvbjE=";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github";
    }>;
  repos_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/repos";
    }>;
  events_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/events";
    }>;
  hooks_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/hooks";
    }>;
  issues_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/issues";
    }>;
  members_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/members{/member}";
    }>;
  public_members_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/github/public_members{/member}";
    }>;
  avatar_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/images/error/octocat_happy.gif";
    }>;
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "A great organization";
        }>)
    | null;
  name?: string &
    tags.JsonSchemaPlugin<{
      example: "github";
    }>;
  company?: string &
    tags.JsonSchemaPlugin<{
      example: "GitHub";
    }>;
  blog?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/blog";
    }>;
  location?: string &
    tags.JsonSchemaPlugin<{
      example: "San Francisco";
    }>;
  email?: string &
    tags.Format<"email"> &
    tags.JsonSchemaPlugin<{
      example: "octocat@github.com";
    }>;
  twitter_username?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "github";
        }>)
    | null;
  is_verified?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_organization_projects: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  has_repository_projects: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  public_repos: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  public_gists: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  followers: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 20;
    }>;
  following: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat";
    }>;
  type: string &
    tags.JsonSchemaPlugin<{
      example: "Organization";
    }>;
  total_private_repos?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 100;
    }>;
  owned_private_repos?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 100;
    }>;
  private_gists?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 81;
        }>)
    | null;
  disk_usage?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 10000;
        }>)
    | null;
  collaborators?:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 8;
        }>)
    | null;
  billing_email?:
    | (string &
        tags.Format<"email"> &
        tags.JsonSchemaPlugin<{
          example: "org@example.com";
        }>)
    | null;
  plan?: {
    name: string;
    space: number & tags.Type<"int32">;
    private_repos: number & tags.Type<"int32">;
    filled_seats?: number & tags.Type<"int32">;
    seats?: number & tags.Type<"int32">;
  };
  default_repository_permission?: string | null;
  members_can_create_repositories?:
    | (boolean &
        tags.JsonSchemaPlugin<{
          example: true;
        }>)
    | null;
  two_factor_requirement_enabled?:
    | (boolean &
        tags.JsonSchemaPlugin<{
          example: true;
        }>)
    | null;
  members_allowed_repository_creation_type?: string &
    tags.JsonSchemaPlugin<{
      example: "all";
    }>;
  members_can_create_public_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  members_can_create_private_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  members_can_create_internal_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  members_can_create_pages?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  members_can_create_public_pages?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  members_can_create_private_pages?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  members_can_fork_private_repositories?:
    | (boolean &
        tags.JsonSchemaPlugin<{
          example: false;
        }>)
    | null;
  web_commit_signoff_required?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * **Deprecated.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.
   *
   * Whether GitHub Advanced Security is enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   *
   * @deprecated
   */
  advanced_security_enabled_for_new_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * **Deprecated.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.
   *
   * Whether Dependabot alerts are automatically enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   *
   * @deprecated
   */
  dependabot_alerts_enabled_for_new_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * **Deprecated.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.
   *
   * Whether Dependabot security updates are automatically enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   *
   * @deprecated
   */
  dependabot_security_updates_enabled_for_new_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * **Deprecated.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.
   *
   * Whether dependency graph is automatically enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   *
   * @deprecated
   */
  dependency_graph_enabled_for_new_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * **Deprecated.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.
   *
   * Whether secret scanning is automatically enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   *
   * @deprecated
   */
  secret_scanning_enabled_for_new_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * **Deprecated.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.
   *
   * Whether secret scanning push protection is automatically enabled for new repositories and repositories transferred to this organization.
   *
   * This field is only visible to organization owners or members of a team with the security manager role.
   *
   * @deprecated
   */
  secret_scanning_push_protection_enabled_for_new_repositories?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
   */
  secret_scanning_push_protection_custom_link_enabled?: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * An optional URL string to display to contributors who are blocked from pushing a secret.
   */
  secret_scanning_push_protection_custom_link?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/test-org/test-repo/blob/main/README.md";
        }>)
    | null;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2008-01-14T04:33:35Z";
    }>;
  updated_at: string & tags.Format<"date-time">;
  archived_at: (string & tags.Format<"date-time">) | null;
};
