import { tags } from "typia";

/**
 * Branch Restriction Policy
 *
 * @title Branch Restriction Policy
 */
export type branch_minus_restriction_minus_policy = {
  url: string & tags.Format<"uri">;
  users_url: string & tags.Format<"uri">;
  teams_url: string & tags.Format<"uri">;
  apps_url: string & tags.Format<"uri">;
  users: {
    login?: string;
    id?: number &
      tags.Type<"int32"> &
      tags.JsonSchemaPlugin<{
        format: "int64";
      }>;
    node_id?: string;
    avatar_url?: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?: string;
    events_url?: string;
    received_events_url?: string;
    type?: string;
    site_admin?: boolean;
  }[];
  teams: {
    id?: number & tags.Type<"int32">;
    node_id?: string;
    url?: string;
    html_url?: string;
    name?: string;
    slug?: string;
    description?: string | null;
    privacy?: string;
    notification_setting?: string;
    permission?: string;
    members_url?: string;
    repositories_url?: string;
    parent?: string | null;
  }[];
  apps: {
    id?: number & tags.Type<"int32">;
    slug?: string;
    node_id?: string;
    owner?: {
      login?: string;
      id?: number & tags.Type<"int32">;
      node_id?: string;
      url?: string;
      repos_url?: string;
      events_url?: string;
      hooks_url?: string;
      issues_url?: string;
      members_url?: string;
      public_members_url?: string;
      avatar_url?: string;
      description?: string;
      gravatar_id?: string &
        tags.JsonSchemaPlugin<{
          example: '""';
        }>;
      html_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://github.com/testorg-ea8ec76d71c3af4b"';
        }>;
      followers_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/followers"';
        }>;
      following_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/following{/other_user}"';
        }>;
      gists_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/gists{/gist_id}"';
        }>;
      starred_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/starred{/owner}{/repo}"';
        }>;
      subscriptions_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/subscriptions"';
        }>;
      organizations_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/orgs"';
        }>;
      received_events_url?: string &
        tags.JsonSchemaPlugin<{
          example: '"https://api.github.com/users/testorg-ea8ec76d71c3af4b/received_events"';
        }>;
      type?: string &
        tags.JsonSchemaPlugin<{
          example: '"Organization"';
        }>;
      site_admin?: boolean &
        tags.JsonSchemaPlugin<{
          example: false;
        }>;
    };
    name?: string;
    client_id?: string;
    description?: string;
    external_url?: string;
    html_url?: string;
    created_at?: string;
    updated_at?: string;
    permissions?: {
      metadata?: string;
      contents?: string;
      issues?: string;
      single_file?: string;
    };
    events?: string[];
  }[];
};
