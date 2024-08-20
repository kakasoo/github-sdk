import { tags } from "typia";

/**
 * Private User
 *
 * @title Private User
 */
export type private_minus_user = {
  login: string &
    tags.JsonSchemaPlugin<{
      example: "octocat";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
      example: 1;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDQ6VXNlcjE=";
    }>;
  avatar_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/images/error/octocat_happy.gif";
    }>;
  gravatar_id:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "41d064eb2195891e12d0413f63227ea7";
        }>)
    | null;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat";
    }>;
  followers_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/followers";
    }>;
  following_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/following{/other_user}";
    }>;
  gists_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/gists{/gist_id}";
    }>;
  starred_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/starred{/owner}{/repo}";
    }>;
  subscriptions_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/subscriptions";
    }>;
  organizations_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/orgs";
    }>;
  repos_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/repos";
    }>;
  events_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/events{/privacy}";
    }>;
  received_events_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/users/octocat/received_events";
    }>;
  type: string &
    tags.JsonSchemaPlugin<{
      example: "User";
    }>;
  site_admin: boolean;
  name:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "monalisa octocat";
        }>)
    | null;
  company:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "GitHub";
        }>)
    | null;
  blog:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/blog";
        }>)
    | null;
  location:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "San Francisco";
        }>)
    | null;
  email:
    | (string &
        tags.Format<"email"> &
        tags.JsonSchemaPlugin<{
          example: "octocat@github.com";
        }>)
    | null;
  notification_email?:
    | (string &
        tags.Format<"email"> &
        tags.JsonSchemaPlugin<{
          example: "octocat@github.com";
        }>)
    | null;
  hireable: boolean | null;
  bio:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "There once was...";
        }>)
    | null;
  twitter_username?:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "monalisa";
        }>)
    | null;
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
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2008-01-14T04:33:35Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2008-01-14T04:33:35Z";
    }>;
  private_gists: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 81;
    }>;
  total_private_repos: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 100;
    }>;
  owned_private_repos: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 100;
    }>;
  disk_usage: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 10000;
    }>;
  collaborators: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 8;
    }>;
  two_factor_authentication: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  plan?: {
    collaborators: number & tags.Type<"int32">;
    name: string;
    space: number & tags.Type<"int32">;
    private_repos: number & tags.Type<"int32">;
  };
  suspended_at?: (string & tags.Format<"date-time">) | null;
  business_plus?: boolean;
  ldap_dn?: string;
};
