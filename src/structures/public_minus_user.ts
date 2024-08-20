import { tags } from "typia";

/**
 * Public User
 *
 * @title Public User
 */
export type public_minus_user = {
  login: string;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  node_id: string;
  avatar_url: string & tags.Format<"uri">;
  gravatar_id: string | null;
  url: string & tags.Format<"uri">;
  html_url: string & tags.Format<"uri">;
  followers_url: string & tags.Format<"uri">;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string & tags.Format<"uri">;
  organizations_url: string & tags.Format<"uri">;
  repos_url: string & tags.Format<"uri">;
  events_url: string;
  received_events_url: string & tags.Format<"uri">;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: (string & tags.Format<"email">) | null;
  notification_email?: (string & tags.Format<"email">) | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username?: string | null;
  public_repos: number & tags.Type<"int32">;
  public_gists: number & tags.Type<"int32">;
  followers: number & tags.Type<"int32">;
  following: number & tags.Type<"int32">;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  plan?: {
    collaborators: number & tags.Type<"int32">;
    name: string;
    space: number & tags.Type<"int32">;
    private_repos: number & tags.Type<"int32">;
  };
  suspended_at?: (string & tags.Format<"date-time">) | null;
  private_gists?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  total_private_repos?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  owned_private_repos?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 2;
    }>;
  disk_usage?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  collaborators?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 3;
    }>;
};
