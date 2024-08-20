import { tags } from "typia";

/**
 * Collaborator
 *
 * @title Collaborator
 */
export type collaborator = {
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
  email?: string | null;
  name?: string | null;
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
  permissions?: {
    pull: boolean;
    triage?: boolean;
    push: boolean;
    maintain?: boolean;
    admin: boolean;
  };
  role_name: string &
    tags.JsonSchemaPlugin<{
      example: "admin";
    }>;
};
