import { tags } from "typia";

/**
 * @title Project Card
 */
export type webhooks_project_card = {
  after_id?: (number & tags.Type<"int32">) | null;
  /**
   * Whether or not the card is archived
   */
  archived: boolean;
  column_id: number & tags.Type<"int32">;
  column_url: string & tags.Format<"uri">;
  content_url?: string & tags.Format<"uri">;
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
  /**
   * The project card's ID
   */
  id: number & tags.Type<"int32">;
  node_id: string;
  note: string | null;
  project_url: string & tags.Format<"uri">;
  updated_at: string & tags.Format<"date-time">;
  url: string & tags.Format<"uri">;
};
