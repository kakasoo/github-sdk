import { tags } from "typia";

/**
 * @title Project
 */
export type webhooks_project = {
  /**
   * Body of the project
   */
  body: string | null;
  columns_url: string & tags.Format<"uri">;
  created_at: string & tags.Format<"date-time">;
  /**
   * @title User
   */
  creator: {
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
  html_url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  /**
   * Name of the project
   */
  name: string;
  node_id: string;
  number: number & tags.Type<"int32">;
  owner_url: string & tags.Format<"uri">;
  /**
   * State of the project; either 'open' or 'closed'
   */
  state: "open" | "closed";
  updated_at: string & tags.Format<"date-time">;
  url: string & tags.Format<"uri">;
};
