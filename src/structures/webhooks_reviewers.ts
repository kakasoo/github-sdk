import { tags } from "typia";

export type webhooks_reviewers = {
  /**
   * @title User
   */
  reviewer?: {
    avatar_url?: string & tags.Format<"uri">;
    deleted?: boolean;
    email?: string | null;
    events_url?: string & tags.Format<"uri-template">;
    followers_url?: string & tags.Format<"uri">;
    following_url?: string & tags.Format<"uri-template">;
    gists_url?: string & tags.Format<"uri-template">;
    gravatar_id?: string;
    html_url?: string & tags.Format<"uri">;
    id: number & tags.Type<"int32">;
    login: string;
    name?: string;
    node_id?: string;
    organizations_url?: string & tags.Format<"uri">;
    received_events_url?: string & tags.Format<"uri">;
    repos_url?: string & tags.Format<"uri">;
    site_admin?: boolean;
    starred_url?: string & tags.Format<"uri-template">;
    subscriptions_url?: string & tags.Format<"uri">;
    type?: "Bot" | "User" | "Organization";
    url?: string & tags.Format<"uri">;
  } | null;
  type?: "User";
}[];
