import { tags } from "typia";

/**
 * A GitHub organization.
 *
 * @title Organization Simple
 */
export type organization_minus_simple = {
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
};
