import { tags } from "typia";

/**
 * A collection of related issues and pull requests.
 *
 * @title Milestone
 */
export type webhooks_milestone_3 = {
  closed_at: (string & tags.Format<"date-time">) | null;
  closed_issues: number & tags.Type<"int32">;
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
  description: string | null;
  due_on: (string & tags.Format<"date-time">) | null;
  html_url: string & tags.Format<"uri">;
  id: number & tags.Type<"int32">;
  labels_url: string & tags.Format<"uri">;
  node_id: string;
  /**
   * The number of the milestone.
   */
  number: number & tags.Type<"int32">;
  open_issues: number & tags.Type<"int32">;
  /**
   * The state of the milestone.
   */
  state: "open" | "closed";
  /**
   * The title of the milestone.
   */
  title: string;
  updated_at: string & tags.Format<"date-time">;
  url: string & tags.Format<"uri">;
};
