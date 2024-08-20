import { tags } from "typia";

/**
 * Contributor
 *
 * @title Contributor
 */
export type contributor = {
  login?: string;
  id?: number & tags.Type<"int32">;
  node_id?: string;
  avatar_url?: string & tags.Format<"uri">;
  gravatar_id?: string | null;
  url?: string & tags.Format<"uri">;
  html_url?: string & tags.Format<"uri">;
  followers_url?: string & tags.Format<"uri">;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string & tags.Format<"uri">;
  organizations_url?: string & tags.Format<"uri">;
  repos_url?: string & tags.Format<"uri">;
  events_url?: string;
  received_events_url?: string & tags.Format<"uri">;
  type: string;
  site_admin?: boolean;
  contributions: number & tags.Type<"int32">;
  email?: string;
  name?: string;
};
